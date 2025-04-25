Created by Carly Copley
25 April 2025
CIS 376

This app was created to log the meals the user has eaten. 
There are many benefits to logging your meals especially when you are on a diet or calorie deficit. 
With the help of this app, you can keep track of and improve your eating habits!

This is what inspired my login page:
<img src="https://3.bp.blogspot.com/-BQSEvAqkr0w/VsVQASueNlI/AAAAAAAABks/Rmabc2KPrhA/s1600/output.png">

This is my HTML code for my login:
```html
          <li class="nav-item">
            <a class="nav-link active" id="loginLink" href="javascript:void(0);" onclick="toggleLoginForm()">Login</a>
            <div id="loginForm" style="display:none;">
              <label for="username">Username:</label>
              <input type="text" id="username" placeholder="Type here"><br><br>
              <label for="password">Password:</label>
              <input type="password" id="password" placeholder="Type here"><br><br>
              <button type="button" onclick="submitLogin()">Submit</button>
            </div>
          </li>

```


For the future of this app: 
- I would include a calorie calculator. This will log the amount of calories estimated to be in each meal you submit.
- I would also include a limit you can set for your daily calorie intake. After you submit your meals, you can see what track you are on for your daily calories.
