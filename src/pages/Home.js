import React, { Component } from 'react'
import Button from '@public/components/src/button'
import Input from '@public/components/src/input'
import Textarea from '@public/components/src/textarea'
import Loading from '@public/components/src/loading'
import MessageBox from '@public/components/src/messageBox'
import Toast from '@public/components/src/toast'
import ImageUploader from '@public/components/src/image-uploader'
import Checkbox from '@public/components/src/checkbox'
// import { Button } from 'element-react'

export default class Home extends Component {
  state = {
    title: 'hello world',
    desc: '12312',
    images: '',
    options: [
      { label: '汉字', value: 1 },
      { label: '汉字1', value: 2 },
      { label: '汉字2', value: 3 },
      { label: '汉字3', value: 4 }
    ],
    checkbox: [1, 2]
  }

  componentWillMount () {
  }

  buttonClickHandler () {
    Loading.hide()
    console.log(this.input.value)
  }

  buttonClickHandler2 () {
    Loading.show()

    setTimeout(Loading.hide, 3000)
  }

  inputChangeHandler (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  alertHandler () {
    MessageBox.alert({
      msg: '123',
      btnText: '阿萨德'
    }).then(() => {
      console.log(12323)
    })
  }

  confirmHandler () {
    MessageBox.confirm({
      msg: '阿斯蒂芬的',
      confirmBtn: '请问',
      cancelBtn: '按时'
    }).then(() => {
      console.log('confirm')
    }).catch(() => {
      console.log('cancel')
    })
  }

  getImages (value) {
    console.log(value)
  }

  toasthandler () {
    Toast.show('qqqweqwqewqweqasdf').then(() => {
      console.log('hide toast')
    })
  }

  render () {
    return (
      <div className="home" style={{ paddingBottom: '200px' }}>
        {this.state.title}
        <Input name="title" showClear label="姓名姓名" placeholder="请输入姓名姓名" type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <input name="title" ref={input => { this.input = input }} type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <Button onClick={this.buttonClickHandler.bind(this)}>啊阿萨德</Button>
        <Button onClick={this.buttonClickHandler2.bind(this)}>showLoading</Button>
        <Button onClick={this.alertHandler.bind(this)}>alert</Button>
        <Button onClick={this.confirmHandler.bind(this)}>confirm</Button>
        <Button onClick={this.toasthandler.bind(this)}>toast</Button>
        <Textarea name="desc" value={this.state.desc} onChange={this.inputChangeHandler.bind(this)} showCount maxlength="20"/>
        <ImageUploader value={this.state.images} onChange={this.getImages.bind(this)}/>
        <Checkbox options={this.state.options} value={this.state.checkbox} onChange={this.getImages.bind(this)}/>
      </div>
    )
  }

  componentDidMount () {
    console.log(this)
  }

  componentWillUpdate () {
  }

  componentDidUpdate () {
  }
}
