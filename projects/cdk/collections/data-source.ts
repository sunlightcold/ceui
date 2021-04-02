import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ceuiFilterDataList } from './filter';

/**
 * 数据集合流处理，包含过滤，数据集合变更时的检测，配合 onPush 使用更佳
 */
export class CeuiDataSource<T> {
  /**
   * 数据更新时，发出的最新的数据流
   */
  private readonly _data$: BehaviorSubject<T[]>;

  /**
   * 最终返回给视图渲染的数据流
   */
  private readonly _renderData$ = new BehaviorSubject<T[]>([]);

  /**
   * 设置新的过滤字符串时发出的事件流
   */
  private readonly _filter$ = new BehaviorSubject<string>('');

  /**
   * 更新事件流对象，判断流存在的依据
   */
  _renderChangesSubscription: Subscription | null = null;

  /**
   * 已通过过滤字符串匹配后的数据集合
   */
  filteredData: T[] = [];

  get data(): T[] {
    return this._data$.value;
  }
  set data(data: T[]) {
    this._data$.next(data);
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
  }

  get filter(): string {
    return this._filter$.value;
  }
  set filter(value: string) {
    this._filter$.next(value);

    // 如果未处于订阅状态，filterData 需要数据更新
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }

  constructor(initialData: T[] = []) {
    this._data$ = new BehaviorSubject<T[]>(initialData);
    this._updateChangeSubscription();
  }

  private _updateChangeSubscription(): void {
    const dataStream = this._data$;

    // 订阅数据更改或过滤字符串更改，获取最新的过滤数据流
    const filteredData$ = combineLatest([dataStream, this._filter$]).pipe(
      map(([data]) => this._filterData(data))
    );

    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = filteredData$.subscribe((data) =>
      this._renderData$.next(data)
    );
  }

  /**
   * 返回经过过滤的集合，如果为设置过滤字符串则返回原集合
   * @param data 需要过滤的集合
   * @returns 过滤后的集合
   */
  _filterData(data: T[]): T[] {
    this.filteredData =
      this.filter == null || this.filter == ''
        ? this.data
        : ceuiFilterDataList<T>(data, this.filter);
    return this.filteredData;
  }

  /**
   * 连接到数据流
   * @returns 需要渲染的数据流
   */
  connect(): BehaviorSubject<T[]> {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData$;
  }

  /**
   * 解除数据流
   */
  disconnect(): void {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
}
