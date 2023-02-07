import emailjs from "emailjs-com";

const userID = import.meta.env.VITE_REACT_APP_USER_ID;
const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID;


export async function sendEmail(event: any) {
  event.preventDefault();

  emailjs
    .sendForm(serviceID, templateID, event.target, userID)
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
