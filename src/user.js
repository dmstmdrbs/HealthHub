import { userInfo } from '@/userInfo.js';

export let user = {
  uID: 123,
  id: '',
  userInfo: userInfo,
};
export function saveUser() {
  const req = {
    uName: this.user.userInfo.name,
    age: parseInt(this.user.userInfo.age),
    sex: this.user.userInfo.sex,
    height: parseInt(this.user.userInfo.height),
    weight: parseInt(this.user.userInfo.weight),
    sqrt: parseInt(this.user.userInfo.sqrt),
    bench: parseInt(this.user.userInfo.bench),
    dead: parseInt(this.user.userInfo.dead),
    weak: this.user.userInfo.weak,
  };
  fetch('http://115.85.183.157:3000/userInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        alert('성공');
      } else {
        alert(res.msg);
      }
    })
    .catch(err => {
      console.error('error');
    });
}
