import { Action } from '@ngrx/store'

import { DescriptiveStatistic } from '../../../shared/enums/descriptive-statistic.enum'
import { TimeInterval } from '../../../shared/enums/time-interval.enum'
import { ChartData } from '../../../shared/models/chart-data.model'
import { Sensor } from '../../../shared/models/sensor.model'
import { TimeFrame } from '../../../shared/models/time-frame.model'

export const LOAD = '[SubjectPage][Sensors-Data] LOAD'
export const LOAD_SUCCESS = '[SubjectPage][Sensors-Data] LOAD_SUCCESS'
export const UPDATE_DATES = '[SubjectPage][Sensors-Data] UPDATE_DATES'
export const SET_TOOLTIP_DATE = '[SubjectPage][Sensors-Data] SET_TOOLTIP_DATE'
export const SET_TIME_FRAME = '[SubjectPage][Sensors-Data] SET_TIME_FRAME'
export const SET_TIME_INTERVAL = '[SubjectPage][Sensors-Data] SET_TIME_INTERVAL'
export const SET_DESCRIPTIVE_STATISTIC =
  '[SubjectPage][Sensors-Data] SET_DESCRIPTIVE_STATISTIC'
export const DESTROY = '[SubjectPage][Sensors-Data] DESTROY'

export class Load implements Action {
  readonly type = LOAD

  constructor(public payload: Sensor[]) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS

  constructor(public payload: { data: ChartData[]; sensor: Sensor }) {}
}

export class UpdateDates implements Action {
  readonly type = UPDATE_DATES
}

export class SetTooltipDate implements Action {
  readonly type = SET_TOOLTIP_DATE

  constructor(public payload: Date) {}
}

export class SetTimeFrame implements Action {
  readonly type = SET_TIME_FRAME

  constructor(public payload: TimeFrame) {}
}

export class SetTimeInterval implements Action {
  readonly type = SET_TIME_INTERVAL

  constructor(public payload: TimeInterval) {}
}

export class SetDescriptiveStatistic implements Action {
  readonly type = SET_DESCRIPTIVE_STATISTIC

  constructor(public payload: DescriptiveStatistic) {}
}

export class Destroy implements Action {
  readonly type = DESTROY
}

export type Actions =
  | Load
  | LoadSuccess
  | UpdateDates
  | SetTooltipDate
  | SetTimeFrame
  | SetTimeInterval
  | SetDescriptiveStatistic
  | Destroy
