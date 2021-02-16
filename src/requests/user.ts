export const getUser = () =>
  fetch('https://randomuser.me/api/').then((res) => res.json())
