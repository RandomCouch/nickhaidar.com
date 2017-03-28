var React = require('react');
var ReactDOM = require('react-dom');
var rSwitch = require('jsx-switch');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var Footer = React.createClass({
   render: function(){
       return(
            <div className='footer'>
                <p>Designed and coded by myself</p>
                <div className='icons'>
                    <img src='//nodejs.org/static/images/logos/nodejs-new-pantone-black.png' />
                    <img src='//angular.github.io/react-native-renderer/assets/react.png' />
                </div>
            </div>
           )
   } 
});
var Form = React.createClass({
    componentDidMount: function() {
        console.log("Mounted form");
    },
    render: function(){
        return(
            <form className="form contact" onSubmit={this.props.submitForm}>
            {this.props.children}
            <button type='submit' className='btn btn-primary'>Send</button>
            </form>
            )
    }
    
});
var ContactForm = React.createClass({
    handleSubmit: function(e){
        var self = this;
        e.preventDefault();
       var email = ReactDOM.findDOMNode(this.refs.email).value;
       var message = ReactDOM.findDOMNode(this.refs.message).value;
       console.log("Email: " + email + " message: " + message);
       $.ajax({
          url: '/sendMail',
          type: 'POST',
          data: {email: email, message: message},
          success: function(result){
              ReactDOM.findDOMNode(self.refs.email).value = "";
              ReactDOM.findDOMNode(self.refs.message).value = "";
              {$(ReactDOM.findDOMNode(self.refs.success)).css('opacity','1')};
              setTimeout(function(){
                  {$(ReactDOM.findDOMNode(self.refs.success)).css('opacity','0')};
              }, 4000);
          }
       });
    },
    componentDidMount: function(){
      //{$(ReactDom.findDOMNode(this.refs.success)).hide()};
    },
   render: function(){
       return(
           <Form submitForm={this.handleSubmit}>
                <div className='row'>
                    <div className='one-third column'><p>Your Email</p></div>
                    <div className='two-thirds column'><input ref='email' name='email' type='email'/></div>
                </div>
                <div className='row'>
                    <div className='one-third column'><p>Message</p></div>
                    <div className='two-thirds column'><textarea ref='message' name='message'/></div>
                </div>
                <div className='success' ref='success' style={{opacity: '0'}}>
                    Your message was successfully sent, thanks for reaching out!
                </div>
           </Form>
           )
   } 
});
var ContactPage = React.createClass({
   render: function(){
       return (
            <div className='container page'>
                <h2>Contact</h2>
                <br/>
                <ContactForm />
            </div>
           )
   } 
});
var ExpPage = React.createClass({
   render: function(){
       return(
            <div className='container page'>
                <h2>Experience</h2>
                <br/>
                <h4><a href='http://www.fuelyouth.com/' target='_blank'>Fuel Industries</a></h4>
                <p>Software Developer - Nov 2016 to Feb 2017</p>
                <p>Project(s)</p>
                <br/>
                <ul>
                    <li>
                        <p><a href='http://www.nflrush.com/apps/' target='_blank' alt='NFL Rush Gameday'><img className='project_picture' src='images/nfl_rush_icon.jpg'/></a></p>
                    </li>
                    <li className='project-description'>
                        <span>Mobile game project in Unity and C#, I was responsible for fixing bugs and implementing new features and game logic.</span>
                    </li>
                    <li>
                        <p>LISNR Demo</p>
                    </li>
                    <li className='project-description'>
                        <span>Two part project, one part was the native demo, where I used the <a href='http://lisnr.com/' target='_blank'>LISNR</a> SDK to create a native (Android Java and iOS Swift) demo application demonstrating the abilities of LISNR.
                            Second part was creating a native LISNR plugin for Unity, which also involved writing code for both iOS and Android.</span>
                    </li>
                </ul>
                <br/>
                <h4><a href='https://www.verney.ca/' target='_blank'>Verney Conference Management</a></h4>
                <p>Full Stack Developer - Sept 2014 to Nov 2016</p>
                <p>Project(s)</p>
                <br/>
                <ul>
                    <li>
                        <p><a href='https://eventsystempro.com/' target='_blank'>EventSystemPro</a></p>
                    </li>
                    <li className='project-description'>
                        <span>
                            This was a big CMS project made with PHP, SQL, HTML and Javascript/jQuery. I was in charge of developing new features, handle client customization requests and fixing bugs. Many third party tools and APIs were used in this project.
                        </span>
                    </li>
                </ul>
                <br/>
                <h4>Freelance</h4>
                <p>Project(s)</p>
                <br/>
                <ul>
                    <li>
                        <p>Indx.it</p>
                    </li>
                    <li className='project-description'>
                        <span>
                            Mobile app project for restaurants and retail stores, designed to improve inventory management and tracking. There was a native app and a web app version as well as an API. I was in charge of writing the API and web app, using PHP, HTML, Javascript and Backbone.js. 
                        </span>
                    </li>
                    <li>
                        <p><a href='http://beautifuldestruction.ca/' target='_blank'>Beautiful Destruction website</a></p>
                    </li>
                    <li className='project-description'>
                        <span>
                            Worked on this website for my client Louis Helbig, used Wordpress and multiple plugins.
                        </span>
                    </li>
                </ul>
                <br />
                <p>And my own projects <a href='https://github.com/RandomCouch' target='_blank'>GitHub link</a></p>
            </div>
            )
   } 
});

var SkillsPage = React.createClass({
    render: function(){
       //display page title
       return(
            <div className='container page'>
                <h2>Skills</h2>
                <br/>
                <h4>Web development</h4>
                <ul>
                    <li>HTML & CSS</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Meteor.js</li>
                    <li>React.js</li>
                    <li>jQuery</li>
                    <li>Rails</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Bootstrap</li>
                    <li>Skeleton CSS</li>
                    <li>Jade template engine</li>
                </ul>
                <br/>
                <h4>Game/Software development</h4>
                <ul>
                    <li>Unity</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>Swift & Obj-c</li>
                </ul>
                <br/>
                <h4>3D/2D Assets</h4>
                <ul>
                    <li>Maya</li>
                    <li>3dsMax</li>
                    <li>Photoshop</li>
                    <li>Apophysis</li>
                    <li>MentalRay</li>
                </ul>
                <br/>
                <h4>Development tools</h4>
                <ul>
                    <li>Visual Studio</li>
                    <li>Monodevelop</li>
                    <li>GIT</li>
                    <li>TortoiseSVN</li>
                    <li>c9.io</li>
                    <li>JIRA</li>
                </ul>
                <br/>
            </div>
        
       )
   } 
});

var AboutPage = React.createClass({
   render: function(){
       //display page title
       return(
            <div className='container page'>
                <h2>About Me</h2>
                <br/>
                <h4>Who I am</h4>
                <p>I'm a passionate and flexible developer living in Gatineau, QC, Canada.</p>
                <p>I am stimulated by new technologies, code and gamification.</p>
                <br/>
                <h4>What I do</h4>
                <p>I create websites, web applications, games and applications with Unity3D, 3d models/animations/rigs using Maya, I manage servers and databases and I play around with Unreal Engine and C++</p>
                <br/>
                <h4>Free time</h4>
                <p>In my free time I work on my code projects, play video games, do outdoor activities and more.</p>
                <br/>
                <h4>Career start</h4>
                <p>I started out as a freelance web developer with my own projects on the side. One could say I power leveled my web development knowledge.</p>
                <p>Since then I've had experience with all of the common web tools, as well as Unity3d and C# and more... The list is expanding every day.</p>
                <br/>
                <h4>Relocating</h4>
                <p>I enjoy traveling and don't mind relocating for a job that interests me</p>
                <br/>
            </div>
        
       )
   } 
});

var MainPage = React.createClass({
   render: function(){
       var titles = ['FULL STACK DEVELOPER', 'UNITY DEVELOPER', '3D GENERALIST', 'PROBLEM SOLVER','MOBILE DEVELOPER','TECHNOLOGY ENTHUSIAST','FAST LEARNER'];
       return(
            <NameTitle ref='content' heading="Nick Haidar" titles={titles} />
           )
       
   } 
});
var ChangingTitle = React.createClass({
   getInitialState: function(){
        var currentTitle = "";
        if(this.props.titles && this.props.titles.length > 0){
            currentTitle = 0;
        }
        return{
            currentTitle: currentTitle,
            timer: null
        }
    },
    componentDidMount: function(){
       //Switch currentTitle
       var self = this;
       if(this.props.titles.length > 0){
            TIMER = setInterval(function(){
                var current = self.state.currentTitle;
                current++;
                if(current > self.props.titles.length - 1){
                    current = 0;
                }
                 setTimeout(function(){
                    {$(ReactDOM.findDOMNode(self.refs.pElement)).css("color", "transparent")};
                    
                        setTimeout(function(){
                        self.setState({currentTitle: current});
                        {$(ReactDOM.findDOMNode(self.refs.pElement)).css("color", "white")};
                    }, 500);
                }, 500);
            }, 2000);
       }
       
    },
    componentWillUnmount: function(){
        clearInterval(TIMER);
    },
    render: function(){
        return(
                <p ref='pElement' className='section-description'>{this.props.titles[this.state.currentTitle]}</p>
            )
    }
});

var NameTitle = React.createClass({
    componentWillUnmount:function(){
          {$(ReactDOM.findDOMNode(this.refs.container)).css("transform", "scaleX(0)")};
    },
   render: function(){
       return(
           <div ref='container' className="container nameContainer">
               <h3 className="section-heading">{this.props.heading}</h3>
               <ChangingTitle titles={this.props.titles}/>
           </div>
           )
   }
});
var FocusedLink = React.createClass({
    componentDidMount: function(){
        var self = this;
        var colors = ['#377ba7','#45a251','#ccea68','#e48759'];
        var index = 1;
        {$(ReactDOM.findDOMNode(self.refs.linkEl)).css("border-color", colors[0])};
        setInterval(function(){
            {$(ReactDOM.findDOMNode(self.refs.linkEl)).css("border-color", colors[index])};
            index++;
            if(index > 3){
              index = 0;
            }
        }, 2000);
    },
    render: function(){
       return(
           <div ref='linkEl' className="navLink focused" onClick={() => {this.props.handleClick()}}>
                <p>{this.props.label}</p>
           </div>
           )
    }
})
var NavLink = React.createClass({
    getInitialState: function(){
        return{
            focused: this.props.focused || false,
            interval: null
        }
    },
   render: function(){
       var classes = "navLink";
       if(this.props.focused){
           return(
               <FocusedLink handleClick={this.props.handleClick} label={this.props.label} />
               )
       }else{
            return(
               <div ref='linkEl' className={classes} onClick={() => {this.props.handleClick()}}>
                    <p>{this.props.label}</p>
               </div>
           )
       }
   } 
});

var NavMenu = React.createClass({
    
    render: function(){
        return(
            <div id='navMenu'>
                {this.props.links.map(function(item,i){
                   return (<NavLink key={i} handleClick={item.handleClick} label={item.label} focused={item.focused}/>); 
                })}
            </div>
            )
    }
});

var Header = React.createClass({
    componentDidMount: function(){
       var self = this;
       $(window).scroll(function(){
           var scroll = window.scrollY;
           if(scroll > 130){
               {$(ReactDOM.findDOMNode(self.refs.header)).css("background-color", "rgba(0, 0, 0, 0.8)")};
           }else{
               {$(ReactDOM.findDOMNode(self.refs.header)).css("background-color", "")};
           }
       });
    },
   render: function(){
       return(
           <div id='header' ref='header'>
                <NavMenu links={this.props.links} />
           </div>
       )
   } 
});

var Main = React.createClass({
    getInitialState: function(){
       var data = {
           currentPage: 'home'
       }
       return data;
    },
    componentDidMount: function(){
        {$(ReactDOM.findDOMNode(this.refs.content)).css("transform", "ScaleX(0)")};
         var self = this;
         setTimeout(function(){
             {$(ReactDOM.findDOMNode(self.refs.content)).css("transform", "ScaleX(1)")};
         }, 100);
    },
    componentDidUpdate: function(){
         {$(ReactDOM.findDOMNode(this.refs.content)).css("transform", "ScaleX(0)")};
         var self = this;
         setTimeout(function(){
             {$(ReactDOM.findDOMNode(self.refs.content)).css("transform", "ScaleX(1)")};
         }, 100);
    },
    changePage: function(page){
        var self = this;
       setTimeout(function(){
           {$(ReactDOM.findDOMNode(self.refs.content)).css("transform", "ScaleX(0)")};
           setTimeout(function(){
               self.setState({currentPage: page});
           }, 500);
       }, 100);
       
    },
   render: function(){
       var links = [
               {label: "Home", handleClick: () => this.changePage("home"), focused: this.state.currentPage == "home"},
               {label: "About", handleClick: () => this.changePage("about"), focused: this.state.currentPage == "about"},
               {label: "Skills", handleClick: () => this.changePage("skills"), focused: this.state.currentPage == "skills"},
               {label: "Experience", handleClick: () => this.changePage("experience"), focused: this.state.currentPage == "experience"},
               {label: "Contact", handleClick: () => this.changePage("contact"), focused: this.state.currentPage == "contact"}
               ];
       
      
       return(
           <div>
           <Header links={links}/>
           <Page ref='content' page={this.state.currentPage}/>
           <Footer />
           </div>
        )
   } 
});

var Page = React.createClass({
   render: function(){
        switch(this.props.page){
            case "home":
                return(
                    <MainPage />
                    )
            case "about":
                return(
                    <AboutPage />
                    )
            case "skills":
                return(
                    <SkillsPage />
                    )
            case "experience":
                return(
                    <ExpPage />
                    )
            case "contact":
                return(
                    <ContactPage />
                    )
        }   
   }
});

module.exports = Main;