import { Card } from "../Card"

export const Column = ({ title }) => {
return (
    <div className="main__column column">
                <div className="column__title">
                  <p> {title} </p>
                </div>
                < Card /> 
              </div>
)
}