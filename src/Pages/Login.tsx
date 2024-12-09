import Cookies from 'js-cookie'

export const Login = () => {
  function login() {
    const username = (document.getElementById('username') as HTMLInputElement).value
    
    if(username) {
      Cookies.set('token', username)
      window.location.reload()
    }

  }
  return (
    <div>
      <h1>Belépés</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username"
          className="form-label">Felhasználónév</label>
          <input type="text" id="username" name="username" 
          className="form-control" placeholder="felhasználónév" />
        </div>
        <div className="form-group">
          <label htmlFor="password"
          className="form-label">Jelszó</label>
          <input type="text" id="password" name="password" 
          className="form-control" placeholder="jelszó" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-3"
          onClick={login}>
            Belépés
          </button>
        </div>
      </form>
    </div>
  )
}
