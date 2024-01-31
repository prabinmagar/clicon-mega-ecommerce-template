import { Images } from "@phosphor-icons/react"

const ErrorScreen = () => {
  return (
    <div className="pg-not-found">
      <div className="container">
        <div className="seg-not-found">
          <div className="elem-not-found">
            <div className="not-found-img">
              <img src={Images.PageNotFound} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorScreen
