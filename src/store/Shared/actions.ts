/* eslint-disable import/no-anonymous-default-export */
import { doLoadFeed, doLogin } from '../../service/'
import { SharedState } from './state'
import { to } from '../../utils'


export default (
  setState: React.Dispatch<React.SetStateAction<SharedState>>,
  Selectors: any,
) => {
  
  const loadFeed = async () => {
    const [err, res] = await to(doLoadFeed())

    if (err) return 'Erro ao Carregar Feed'

    setState((_prev: any) => ({
      ..._prev,
      feedPosts: res,
    }));
  }

  const dispareLogin = async () => {
    const [err, res] = await to(doLogin())

    if (err) return 'Erro ao Fazer Login'
    

    localStorage.setItem('tribe-user-info', JSON.stringify(res))

  }

  const doLogout = () => {
    localStorage.removeItem('tribe-user-info')
    window.location.href = '/'
  }

  return {
    loadFeed,
    dispareLogin,
    doLogout
  };
};
