import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="users-by-email-auth"
export default class extends Controller {
  static targets = ['email', 'submit']

  connect() {
    console.log("emailTarget: "+  this.emailTarget)
    console.log("submitTarget: " + this.submitTarget)
    // Check if email target is empty

    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault()

      if (this.emailTarget.value.length === 0) {
        console.log("inside if submitTarget is empty statement")
      } else {

      }
    })
  }
}
