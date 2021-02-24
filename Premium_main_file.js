setInterval(() => {
let ids = db.get(`ids`)
if(!ids) return;
ids.forEach(x => {
  let user = db.get(`premium_${x.user}`)
  if(!user) return;
  let timleft = user.time;
  if(timleft < 0) {
   client.users.cache.get(x.user).send(`you'r premium sub has been ended!`)
    db.delete(`premium_${x.user}`)
    return;
  }
  setTimeout(() => {
    let data = {
      by: user.by,
      time: user.time-5000
    }
    db.set(`premium_${x.user}`, data)
  }, 6000);
})
}, 5000);
//
