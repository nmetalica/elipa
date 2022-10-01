const HeaderPage = ({ title, intro }) => {
  return (
    <header className="header-page-main">
      <div className="container">
        <h1 className="header-title title-2">{title}</h1>
        { intro ? <p className="header-subtitle subtitle-regular">{intro}</p> : '' }
      </div>
    </header>
  )
}

export default HeaderPage
