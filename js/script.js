//(function(Vue,document){
var php_progress = document.getElementsByClassName('progress-php');
var sql_progress = document.getElementsByClassName('progress-sql');
var vue_progress = document.getElementsByClassName('progress-vue');
var css_progress = document.getElementsByClassName('progress-css');
var html_progress = document.getElementsByClassName('progress-html');
 let vm =   new Vue({
        el: "#app",
        data: {
            name: 'Mehari Belayneh',
            email: 'meharib82@gmail.com',
            phone: '0946591848',
            profile: false,
            skill: false,
            contact: false,
            title: "BS.c Mehari Belayneh",
            done: true,
            skills: false,
            loading: false,
            welcome: true,
            changeColor: false,
            toggleSide: false,
            header: false,
            //actual levels
            laravel_level_actual: 80,
            sql_level_actual: 60,
            js_level_actual: 66,
            css_level_actual: 80,
            html_level_actual: 70,
            
            //levels to update in the dom
            laravel_level: 0,
            sql_level: 0,
            js_level: 0,
            css_level: 0,
            html_level: 0
            
        },
        methods: {
            toggle() {
                this.toggleSide = this.toggleSide ? false : true;
            },
            start(){
                this.done = false;
                this.toggleSide = true;
                setTimeout(()=>{
                    this.welcome = true;
                    this.changeColor = true;
                },500)
            },
            showProfile(e) {
                if(this.done) return;
                this.makeFalse();
                setTimeout(()=>{
                    this.title = "Profile";
                    this.profile = true;
                    this.loading = false;
                },1000)
            },
            
            showEducation() {
            	
            },
            
            showSkill() {
                if(this.done) return;
                this.makeFalse();
                setTimeout(()=>{
                    this.title = "My skills";
                    this.skill = true;
                    setTimeout(()=>{
                        this.skills = true;
                        this.loading = false;
                    },100)
                },1000);                    
               var level_interval = setInterval(()=>{
                    if(this.laravel_level != this.laravel_level_actual){
                        this.laravel_level++;
                        if(php_progress[0])
                            php_progress[0].style.width = this.laravel_level + '%';
                    }
                    if(this.sql_level != this.sql_level_actual){
                        this.sql_level++;
                        if(sql_progress[0])
                            sql_progress[0].style.width = this.sql_level + '%';
                    }
                    if(this.js_level != this.js_level_actual){
                        this.js_level++;
                        if(vue_progress[0])
                            vue_progress[0].style.width = this.js_level + '%';
                    }
                    if(this.css_level != this.css_level_actual){
                        this.css_level++;
                        if(css_progress[0])
                            css_progress[0].style.width = this.css_level + '%';
                    }
                    if(this.html_level != this.html_level_actual){
                        this.html_level++;
                        if(html_progress[0])
                            html_progress[0].style.width = this.html_level + '%';                                               
                    }
                },100);
//               setTimeout(()=>{
//                 clearInterval(level_interval);
//               },30000);
            },
            showContact() {
                if(this.done) return;
                this.makeFalse();
                setTimeout(()=>{
                    this.title = "Contact";
                    this.contact = true;
                    this.loading = false;
                },1000)
            },
            makeFalse() {
                this.html_level = this.laravel_level = this.css_level = this.js_level = this.sql_level = 0;
                this.loading = this.toggleSide =  true;
                this.changeColor = this.welcome = this.profile = this.contact = false;
//                html_progress[0].style.width = css_progress[0].style.width = vue_progress[0].style.width = php_progress[0].style.width = sql_progress[0].style.width = 0;
                this.skills = this.skill = false;
            },
            doneShow() {
                this.makeFalse();
                this.toggleSide = false;
                setTimeout(()=>{
                    this.done = true;
                },1000);
                this.title = "Portfolio Mehari"
            }
        },
    });
//})(Vue,document);

//let wrapper = document.getElementById('detail-wrapper');
//let colors = ['#323','#e91e63','#673ab7','#9C27B0','#795548'];
//let i = 0;
//setInterval(()=>{
//    if(i==4) i = 0;
//    wrapper.style.backgroundColor = colors[i];
//    i++;
//},5000);