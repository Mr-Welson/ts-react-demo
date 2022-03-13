import BaseComponent from './demo/01_BaseComponent/index';
import ReactProps from './demo/02_Props/index';
import ReactState from './demo/03_State/index';
import Input from './demo/04_Input/index';
import InputRefactor from './demo/05_InputRefactor/index';
import ColorPicker from './demo/06_ColorPicker/index';
import ColorPickerRefactor from './demo/07_ColorPickerRefactor/index';
import Sidebar from './demo/08_Sidebar/index';
import TableMock from './demo/09_TableMock/index';
import TableHttp from './demo/10_TableHttp/index';
import Context from './demo/11_Context/index';
import HOC from './demo/12_HOC/index';
import Todolist from './demo/13_Todolist/index';
import TodolistWithHooks from './demo/14_TodolistWithHooks/index';

export interface IRoute {
  path: string
  label: string
  component: any  
}

export const routeList: IRoute[] = [
  {
    path: '/base',
    label: 'base',
    component: BaseComponent
  },
  {
    path: '/props',
    label: 'props',
    component: ReactProps
  },
  {
    path: '/state',
    label: 'state',
    component: ReactState
  },
  {
    path: '/input',
    label: '输入框01：使用按钮确认修改',
    component: Input
  },
  {
    path: '/inputRefactor',
    label: '输入框02：带状态的按钮',
    component: InputRefactor
  },
  {
    path: '/colorpicker',
    label: '拾色器01',
    component: ColorPicker
  },
  {
    path: '/colorpickerRefacor',
    label: '拾色器02: 使用slider组件',
    component: ColorPickerRefactor
  },
  {
    path: '/sidebar',
    label: '侧边栏',
    component: Sidebar
  },
  {
    path: '/tableMock',
    label: '表格mock',
    component: TableMock
  },
  {
    path: '/tableFetch',
    label: '表格http',
    component: TableHttp
  },
  {
    path: '/context',
    label: 'context',
    component: Context
  },
  {
    path: '/hoc',
    label: 'hoc',
    component: HOC
  },
  {
    path: '/todolist',
    label: 'Todolist',
    component: Todolist
  },
  {
    path: '/todolistWithHooks',
    label: 'TodolistWithHooks',
    component: TodolistWithHooks
  },
]