import {accountSignup} from '~/lib/service'
import ContentAlert from '~/components/content-alert'
import './styles.scss';

import stream from 'mithril/stream/stream';

function formModel() {
    const model = {
      email: {
        value: stream(''),
        error: '',
        type: 'text',
        placeholder: 'name@email.com',
        validate() {
          model.email.error =
            !model.email.value().match(/.+@.+\..+/) ?
              '邮箱格式不正确' : '';
              return model.email.error === '';
        }
      },
      username: {
        type: 'text',
        placeholder: '请输入用户名',
        value: stream(''),
        error: '',
        validate() {
          model.username.error =
            model.username.value().length <= 3 ?
              '用户名长度须大于3' : '';
              return model.username.error === '';
        }
      },
      password: {
        type: 'password',
        placeholder: '',
        value: stream(''),
        error: '',
        validate() {
          model.password.error =
            model.password.value().length < 6 ?
              '密码长度不能少于6' : '';
              return model.password.error === '';
        }
      },
      repassword: {
        type: 'password',
        placeholder: '',
        value: stream(''),
        error: '',
        validate() {
          model.repassword.error =
            model.repassword.value() !== model.password.value() ?
              '两次输入的密码不一致' : '';
           return model.repassword.error === '';
        }
      },
    };
    return model;
  }
  const model = formModel();
const ValidatedInput = {
    view({ attrs }) {
      return [
        m('input', {
          type: attrs.field.type,
          className: attrs.field.error ? 'form-control is-invalid' : 'form-control',
          value: attrs.field.value(),
          placeholder: attrs.field.placeholder,
          oninput: m.withAttr('value', attrs.field.value)
        }),
        attrs.field.error && m('.invalid-feedback', attrs.field.error)
      ];
    }
  };

function validateAll(model) {
    let valid = true; 
    Object.keys(model).forEach((field) => {
      if(!model[field].validate()) {
          valid = false;
      }
    }
      );
      return valid;
  }

const onsubmit = e => {
    e.preventDefault()
    if(validateAll(model)) {
           accountSignup(
            { username: model.username.value(),
            password:model.password.value(),
            email:model.email.value(),
        } ).then(res => {
                   if(!res.status) {
                ContentAlert.setError( res.message );
            }
               }).catch(err => console.log(err)) // 处理报错信息
        console.log("OK")
    }
  }



const Component = {
    
    oninit: (vnode) => {
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
              loader.classList.add('fadeOut');
            }, 300);
          });
    },
    
    view: () => {
        return (
          [<div id='loader'>
            <div class="spinner"></div>
          </div>,
          <div class="peers ai-s fxw-nw h-100vh">
            <div class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style="background-image: url('../images/bg.jpg')">
              <div class="pos-a centerXY">
                <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
                <img class='pos-a centerXY' src="../images/logo.png" />
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
              <h4 class="fw-300 c-grey-900 mB-40">注册</h4>
              <ContentAlert />
              <form>
                <div class="form-group">
                  <label class="text-normal text-dark">用户名</label>
                  {m(ValidatedInput, { field: model.username })}
                </div>
                <div class="form-group">
                  <label class="text-normal text-dark">邮箱</label>
                  {m(ValidatedInput, { field: model.email })}
                </div>
                <div class="form-group">
                  <label class="text-normal text-dark">密码</label>
                  {m(ValidatedInput, { field: model.password })}
                </div>
                <div class="form-group">
                  <label class="text-normal text-dark">确认密码</label>
                  {m(ValidatedInput, { field: model.repassword })}
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" onclick={onsubmit}>确定</button>
                </div>
              </form>
            </div>
          </div>]
        );
    }
};

export default Component;