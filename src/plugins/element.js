import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Loading,
  Main,
  Message,
  MessageBox,
  Notification,
  Pagination,
  Row
} from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Card)
Vue.use(Col)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Header)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Main)
Vue.use(Pagination)
Vue.use(Row)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

locale.use(lang)
