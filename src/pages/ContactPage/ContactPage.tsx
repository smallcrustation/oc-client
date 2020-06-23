import React from 'react'

import './ContactPage.scss'

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <h1 className="underline-h2">Contact</h1>
      <div className="contact-card">
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>Jody Oberholtzer</th>
            </tr>
            <tr><td></td></tr>
            <tr>
              <td>phone:</td>
              <td>954.816.4444</td>
            </tr>
            <tr>
              <td>email:</td>
              <td>jody1052@gmail.com</td>
            </tr>
            <tr>
              <td>address:</td>
              <td>
                3590 SW 30th Ave, <br /> Ft. Lauderdale, FL 33312
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>Cody Oberholtzer</th>
            </tr>
            <tr><td></td></tr>
            <tr>
              <td>phone:</td>
              <td>954.288.4433</td>
            </tr>
            <tr>
              <td>email:</td>
              <td>lpmaze@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactPage
