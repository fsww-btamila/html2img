const nodeHtmlToImage = require('node-html-to-image');
const html2pdf = require('html-pdf-node');

// const puppeteer = require('puppeteer');

// const  htmlToImage = require('html-to-image');

const fs = require('fs');

const moment = require('moment');


//htmltoimage
module.exports.htmltoimage = async (request, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');

        nodeHtmlToImage({
        output: './image.png',
        html: `<!DOCTYPE html>
        <html>
        <head>
        <style>
        body {
          width:800px;
        background-color: lightblue;
        }

        h1 {
        color: white;
        text-align: center;
        }

        p {
        font-family: verdana;
        font-size: 50px;
        }
        .breaking-newstext{
        font-family: verdana;
        font-size: 50px;
        }
        .about-page {background: #5ea7fe;
        color: #002171 !important;
        }
        .about-page section {
          padding: 5px 0 50px 0;
        }
        .container {
        padding-right: 0px;
        padding-left: 0px;
        margin-right: auto;
        margin-left: auto;
        }
        .about-page .section-title {
        padding-bottom: 20px;
        }
        .about-page .section-title {
        padding-bottom: 20px;
        }

        </style>
        </head>
        <body>

        <h1>My First CSS Example</h1>
        <p>This is a paragraph.</p>
        <section class="about-page">
        <section class="about-ourInfo">
        <div class="container">
        <div class="section-title">
        <h2>குருகளம்</h2>
        </div>
        <div class="" style="font-size:17px;">
        <p>குருகளம் தமிழ்ப்பள்ளி தலைமையாசிரியர்கள் மற்றும் ஆசிரியர்களுக்கான மின்னியல் பாடக்குறிப்பு. ஆசிரியர்கள் தங்கள் பாடக்குறிப்புகளை இயங்கலை மூலம் பதிவு செய்து கொள்ளலாம்.இதன்வழி ஆசிரியர்கள் நேரத்தையும் தாட்களையும் மிச்சப்படுத்தலாம்.</p>
        <p style="font-size:18px;"><b>இயங்கலை பாடக்குறிப்பு மூலம் :</b></p>
        <ul>
        <li>ஆசிரியர்கள் கொடுக்கப்பட்ட பகுதிகளைக் கிளிக் செய்து குறைவான அளவில் தட்டச்சுசெய்தல்.</li>
        <li>ஆசிரியர்கள் பாடக்குறிப்புகளை இயங்கலை மூலம் பதிவுசெய்தல்.</li>
        <li>தலைமையாசிரியர் பாடக்குறிப்பை இயங்கலை மூலம் உறுதிபடுத்துதல்.</li>
        <li>ஆசிரியர்கள் இயங்கலை மூலம் பாடக்குறிப்புகளின் விபரங்களை அறிந்துகொள்ளுதல்.</li>
        <li>ஆசிரியர்கள் பாடக்குறிப்புகளைத் தேவைப்படும் போது அச்சிட்டுக் கொள்ளுதல்.</li>
        <li>பள்ளி மேலாளர் மற்றும் அதிகாரிகள் ஆசிரியர்களின் பாடக்குறிப்புகளை இயங்கலை மூலம் பார்வையிடுதல்.</li>
        </ul>
        </div>
        <div class="section-title">
        <h2>GURUKALAM</h2>
        </div>
        <div style="font-size:16px;">
        <p style="font-size:16px;">Gurukalam.my, eRPH Sekolah Tamil adalah satu penulisan rph online yang pertama untuk kegunaan guru guru dan guru besar di sekolah Tamil dimana ia tidak memerlukan buku rekod mengajar dan ia mempermudah kerja guru serta menjimatkan masa, kertas dan kos. </p>
        <h4>Kelebihan sistem eRPH Sekolah Tamil: </h4>
        <ul>
        <li>Guru hanya perlu klik pada komponen dan kurang menaip.</li>
        <li>Guru menghantar rph secara online. </li>
        <li>Guru besar menyemak rph secara online.</li>
        <li>Guru dapat melihat status rph secara online.</li>
        <li>Guru masih boleh mencetak rph jika perlu. </li>
        <li>Pihak nazir/pihak lain dapat menyemak rph secara online.</li>
        </ul>
        </div>
        </div>
        </section>
        </section>

        </body>
        </html>`
        }).then((bufferImg) => {
            console.log('The image was created successfully!', bufferImg);

            // const fileLocation = './image/';
            const base64Image = new Buffer.from(bufferImg).toString('base64');
            const dataURI = 'data:image/jpeg;base64,' + base64Image;

            // fs.writeFile(fileLocation, dataURI, 'base64', function(err) {
            //     if (err) { console.log(err) } else {
            //         console.log("File upload successfully.");
            //     }
            // });

            // console.log(dataURI);
            return res.end(dataURI);
            // res.end(dataURI);

        });
    } catch (err) {
        console.log("error", err);
        // return res.json(err);
    }
}

module.exports.HtmlToImage = async (request, res) => {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      let reqParam = request.body;
      console.log("htmltopdf");
      console.log("reqParam",reqParam);

      const htmlData = reqParam.htmlData;
      const fileName = reqParam.fname;
      const type = reqParam.type;

      var resultObj = {};

      if(type === 1){

          const img = await nodeHtmlToImage({
            output: './image.png',
            html: '<html><body><div>Check out what I just did! #cool</div></body></html>'
          });

          console.log('The image was created successfully!', img);
          const base64Image = new Buffer.from(img).toString('base64');
          const dataURI = 'data:image/jpeg;base64,' + base64Image;

          // var utc = (moment.utc()).valueOf();
          // var path = 'tmp/image/';
          // var fname = 'fileName' +'_'+utc+'.jpg';
          // var fileLocation = path + fname;

          // fs.writeFile(fileLocation, base64Image, 'base64', function(err) {
          // if (err) { console.log(err) } else {
          //   console.log("Image Uploaded successfully..")

          // }});

          

          resultObj = {
            'Msg':'Image created successfully...',
            'image':dataURI
          }
      }else{
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log("htmltopdf");
        let options = { format: 'A4' };

        let file = { content: "<html><body><div>Check out what I just did! #cool</div></body></html>" };
        // or //
        // let file = { url: "https://example.com" };
        const pdf = await html2pdf.generatePdf(file, options);
        const base64Image = new Buffer.from(pdf).toString('base64');
        const dataURI = 'data:application/pdf;base64,' + base64Image;

        // var utc = (moment.utc()).valueOf();
        // var path = 'tmp/pdf/';
        // var fname = 'fileName' +'_'+utc+'.pdf';
        // var fileLocation = path + fname;

        // fs.writeFile(fileLocation, base64Image, 'base64', function(err) {
        // if (err) { console.log(err) } else {
        //   console.log("PDF Uploaded successfully..")

        // }});

        // window.open(dataURI, "_blank")
        resultObj = {
          'Msg':'PDF created successfully...',
          'image':dataURI
        }

      }

      return res.json(resultObj);
    }
    catch (err) {
        console.log("error", err);

    }
}

