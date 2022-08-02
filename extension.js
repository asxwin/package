
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function getWebviewContent() {
	return `
	<html>
    <table border="0" cellpadding="0" cellspacing="0" width="730" align="center" style="background-color:#d8d8d88c ">
        <tr>
           <td>
              <table border="0" cellpadding="0" cellspacing="0" width="730" align="center"  >
                 <link rel="preconnect" href="https://fonts.googleapis.com">
                 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                 <link href="https://fonts.googleapis.com/css2?family=Nunito:ital@0;1&family=Urbanist:ital,wght@1,300&display=swap" rel="stylesheet">
                 <tbody>
                    <tr>
                       <td valign="top">
                          <img src="https://user-images.githubusercontent.com/84399682/157362734-db396a82-d5e6-4cac-8a4a-c8e3eac6d92e.png" width="100%" >
                       </td>
                    </tr>
                    <tr>
                       <td align="center" style="padding: 10px 15px 0px 15px;">
                          <p  style="font-size: 24px;
                             padding-top:7px ;
                             padding-bottom:7px ;
                             width: 79%;
                             font-weight:bold;
                             background-color: rgb(255, 157, 0);
                             font-family: 'Nunito', sans-serif;
                             border-radius:10px;
                             color:rgb(0, 0, 0);">Welcome to Finverse!!</p>
                       </td>
                    </tr>
                    <tr>
                       <td align="center" style="padding: 30px 15px 10px 15px;">
                          <p  style="font-size: 16px;
                             max-width: 75%;
                             text-align: left;
                             font-family: 'Nunito', sans-serif;
                             color: rgb(0, 0, 0);">Finverse, the finance club of PSG Tech, aims to broaden the horizons of the student community through exposure to industry-driven guest lectures, on-demand workshops, and competition-led learnings across a host of diverse streams in the field of finance.<br><br>
                             We help students make better financial decisions and become financially literate.We also serve as a platform for students to come together, share and learn practical knowledge in managing finance.<br><br>
                          </p>
                       </td>
                    </tr>
              </table>
              <table cellpadding="0" cellspacing="0" width="550" align="center" style="border-radius: 20px;
                 border-style: solid;
                 border-color: rgb(212, 212, 212);
                 border-width: 3px;
                 background-color: rgb(212, 212, 212);">
                 <tbody>
                    <tr>
                    <tr style="font-style: italic; font-family: 'Nunito', sans-serif; color: rgb(0, 0, 0);" >
                       <td align="center" style="padding-top:15px ;padding-bottom:5px ;">
                          <p  style="font-size: 18px;width: 95%;
                             font-family: 'Urbanist', sans-serif;
                             color: rgb(0, 0, 0);
                             font-weight: bold;
                             ">We can't wait to have you on board with us here at Finverse!</p>
                       </td>
                    </tr>
                    <tr >
                       <td align="center" ">
                          <p  style="
                             height: 30px;
                             width: 150px;
                             font-size: 25px;
                             padding-top:5px;
                             padding-bottom:10px;
                             background-color:rgb(255, 157, 0);
                             border-radius: 20px;
                             font-family: 'Nunito', sans-serif;
                             "><a style="text-decoration: none;color:  rgb(51, 0, 0);" href="https://forms.gle/84XmKvUAArPKQvt86">Join us</a></p>
                       </td>
                    </tr>
                    <tr>
                       <td align="center" style="padding-bottom: 10px;padding-top: 5px;">
                          <p  style="font-size: 11px;
                             font-family: 'Nunito', sans-serif;
                             color: rgb(0, 0, 0);
                             width: 95%;">*NOTE: We'll be closing the Google Forms on March 14, 2022. Kindly fill in the form before then.</p>
                       </td>
                    </tr>
                    </tr>
                 </tbody>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="730" align="center">
                 <tbody>
                    <tr>
                       <td align="center" style="padding: 30px 15px 10px 15px;">
                          <p  style="font-size: 24px;
                             font-family: 'Nunito', sans-serif;
                             width: 79%;
                             padding-top:7px ;
                             padding-bottom:7px ;
                             border-radius:10px;
                             font-weight: bold;
                             background-color: rgb(255, 157, 0);
                             color: #001524">What will you do?</p>
                       </td>
                    </tr>
                    <tr>
                       <td align="center" style="padding: 10px 15px 20px 15px;">
                          <p  style="font-size:16px;
                             color: #000000 ;
                             width: 75%;
                             font-family: 'Nunito', sans-serif;
                             text-align: left;">
                             Members are provided with a multitude of opportunities to help facilitate this club with their current skills and enhance these skills on the go.<br><br>
                             We have an <b>Events Team</b> that will actively work on ideation and management of events for the club. This team will comprise of creative operators with a passion for innovation. They will be conducting a huge diversity of events from conducting webinars with industry leaders to our flagship financial literacy event.<br><br>
                             The <b>Financial Analysts Team</b> will work on learning, discussing, and analyzing financial market trends. Using their skills they will help make reports, articles, and blog posts that will directly benefit in improving financial literacy across campus.<br><br>
                             The <b>Design and Technology Team</b> will work on strengthening the club's digital presence.By using their creativity to design posters and mail templates, and help with other promotional activities working in collaboration with other teams.<br><br>
                             The <b>Social Media and Publicity Team</b> will be the voice and the face of the club. The club is planned to get off the ground digital first. Thus, we plan to leverage the reach of social media to the best in these initial stages. The team will play a major role in spreading awareness of club-related activities and initiatives.
                          </p>
                       </td>
                    </tr>
                 </tbody>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="730" align="center" >
                 <tbody>
                    <tr>
                       <td align="center" style="padding: 10px 15px 10px 15px;">
                          <p  style="font-size: 24px;
                             font-family: 'Nunito', sans-serif;
                             width: 79%;
                             padding-top:7px ;
                             padding-bottom:7px ;
                             border-radius:10px;
                             font-weight: bold;
                             background-color: rgb(255, 157, 0);
                             color: #001524">Contact Us</p>
                       </td>
                    </tr>
                 </tbody>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="550" align="center">
                 <tbody>
                    <tr>
                       <td align="center">
                          <p  style="
                             width: 166px;
                             padding-top:7px ;
                             padding-bottom:7px ;
                             border-radius:10px;
                             border-style: solid;
                             height: 70px;
                             border-color: rgb(255, 157, 0);
                             color: #001524">
                             <d style="font-family:Ubuntu,sans-serif;font-size: 20px;"><b>Nithish Kumar</b></d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;">Secretary</d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;font-size:12px">18z337@psgtech.ac.in</d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;color: #7c7c7c;">+91 96006 88823</d>
                          </p>
                       </td>
                       <td align="center">
                          <p  style="
                             width: 166px;
                             padding-top:7px ;
                             padding-bottom:7px ;
                             border-radius:10px;
                             border-style: solid;
                             height: 70px;
                             border-color: rgb(255, 157, 0);
                             color: #001524">
                             <d style="font-family:Ubuntu,sans-serif;font-size: 20px;"><b>Vinula PR</b></d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;">Secretary</d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;font-size: 12px;">18r261@psgtech.ac.in</d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;color: #7c7c7c;">+91 76390 02424</d>
                          </p>
                       </td>
                       <td align="center">
                          <p  style="
                             width: 166px;
                             padding-top:7px ;
                             padding-bottom:7px ;
                             border-radius:10px;
                             border-style: solid;
                             height: 70px;
                             border-color: rgb(255, 157, 0);
                             color: #001524">
                             <d style="font-family:Ubuntu,sans-serif;font-size: 20px;"><b>Aditya Varma</b></d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;">Executive Member</d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;font-size: 12px;">20z205@psgtech.ac.in</d>
                             <br>
                             <d style="font-family:Ubuntu,sans-serif;color: #7c7c7c;">+91 82486 84835</d>
                       </td>
                    </tr>
                 </tbody>
              </table>
              <!-- <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-bottom: 10px; padding-top: 10px;height: 30px;width:120px;">
                 <tbody >
                    <tr align="center">
                       <td >
                          <p style="font-family: 'Ubuntu',sans-serif;font-size: 15px;"> Follow us on</p>
                       </td>
                       <td>
                          <a href="https://www.instagram.com/ashwin.in/"><img
                             src="https://user-images.githubusercontent.com/84399682/157327939-92c4c501-df9b-48ec-a913-f06e5d1eab60.png"
                             width="26" height="27"
                             ></a>
                       </td>
                    </tr>
                 </tbody>
                 </table> -->
              <table align="center"  border="0" cellpadding="0" cellspacing="0" width="100%" >
                 <tr>
                    <td valign="bottom" >
                      
                        <script src="https://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
                     
                    </td>
                 </tr>
              </table>
           </td>
        </tr>
     </table>
</html>`;
}	
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscrank" is now active!');
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscrank.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		let progressOptions = {
			cancellable: true,
			location: vscode.ProgressLocation.Notification,
			title: "I am long running!",
		};
		vscode.window.withProgress(progressOptions, (progress, token) => {
			token.onCancellationRequested(() => {
			  console.log("User canceled the long running operation");
			});
		
			progress.report({ increment: 0 });
		
			setTimeout(() => {
			  progress.report({
				increment: 50,
				message: "Half way done!",
			  });
			}, 2000);
		
			const p = new Promise((resolve) => {
			  setTimeout(() => {
				resolve();
			  }, 4000);
			});
		
			return p;
		  });
		
		}
		
	);
	let openWebview = vscode.commands.registerCommand('vscrank.openWebview',function (){
		const panel = vscode.window.createWebviewPanel(
		'openWebview', // Identifies the type of the webview. Used internally
		'Example Page', // Title of the panel displayed to the user
		vscode.ViewColumn.One, // Editor column to show the new webview panel in.
		{ // Enable scripts in the webview
			enableScripts: true //Set this to true if you want to enable Javascript. 
		}
		);
		context.subscriptions.push(openWebview);
		panel.webview.html = getWebviewContent();
	});
   
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
