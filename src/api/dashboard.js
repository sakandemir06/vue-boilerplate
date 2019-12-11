import { axios } from '@/utils/request'
const api = {
  AverageBudgetUsage: '/reports/average-budget-usage',
  TransitionTotalsByMonth: '/reports/transition-totals-by-month',
  TransitionsByMonth: '/reports/transitions-by-month',
  AverageTransitionAmountsByMonth: 'reports/average-transition-amounts-by-month',
  TransitionsByPeriod: '/reports/transitions-by-period',
  TransitionsByPeriodAndVehicle: '/reports/transitions-by-period-and-vehicle',
  TransitionsExpenditureByPeriod: '/reports/transitions-expenditure-by-period',
  TransitionsExpenditureByPeriodAndVehicle: '/reports/transitions-expenditure-by-period-and-vehicle'
}

export function getAverageBudgetUsage(parameter) {
  return axios({
    url: api.AverageBudgetUsage,
    method: 'get',
    data: parameter
  })
}

export function getTransitionTotalsByMonth(parameter) {
  return axios({
    url: api.TransitionTotalsByMonth,
    method: 'get',
    data: parameter
  })
}

export function getAverageTransitionAmountsByMonth(parameter) {
  return axios({
    url: api.AverageTransitionAmountsByMonth,
    method: 'get',
    data: parameter
  })
}

export function getTransitionsByMonth(parameter) {
  return axios({
    url: api.TransitionsByMonth,
    method: 'get',
    data: parameter
  })
}

export function getTransitionsByPeriod(parameter) {
  return axios({
    url: api.TransitionsByPeriod + '?' + parameter,
    method: 'get',
    data: parameter
  })
}

export function getTransitionsByPeriodAndVehicle(parameter) {
  return axios({
    url: api.TransitionsByPeriodAndVehicle + '?' + parameter,
    method: 'get',
    data: parameter
  })
}

export function getTransitionsExpenditureByPeriod(parameter) {
  return axios({
    url: api.TransitionsExpenditureByPeriod + '?' + parameter,
    method: 'get',
    data: parameter
  })
}

export function getTransitionsExpenditureByPeriodAndVehicle(parameter) {
  return axios({
    url: api.TransitionsExpenditureByPeriodAndVehicle + '?' + parameter,
    method: 'get',
    data: parameter
  })
}
