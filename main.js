function saveToLocalstorage(event)
        {
            event.preventDefault();
            const name=event.target.name.value;
            const email=event.target.email.value;
            display_name.innerHtml=name;
            display_email.innerHtml=email;
            localStorage.setItem('name', name);
           localStorage.setItem('email',email);
            const obj={
              name,
              email
            }
            localStorage.setItem('userdetails',json.stringify)
        }

