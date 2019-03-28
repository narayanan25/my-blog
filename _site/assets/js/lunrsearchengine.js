
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/my-blog/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/my-blog/about",
    "title": "Mediumish Template for Jekyll",
    "body": "  This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository!   Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/my-blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/my-blog/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                                                                                                                                             Let's test spoilers                              :                             Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that. . . :                                                                                                                                       Sal                                11 Jan 2018                                                                                                                                                                                                                                                                                                                  Inception Movie                                                 1 2 3 4 5                                              :                             Review products, books, movies, restaurant and anything you like on your Jekyll blog with Mediumish! JSON-LD ready for review property. :                                                                                                                                       John                                11 Jan 2018                                                                                                                                                                                                                                                                                                        All Stories:                                                                      Welcome to Jekyll!              :       You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways,. . . :                                     22 Mar 2019        &lt;/span&gt;                                                                                             Your Filename              :       A New Post:                                     22 Mar 2019        &lt;/span&gt;                                                                                             Astronaut in a farm field              :       Astronaut in a farm&nbsp;field Life is full of misery, loneliness, and suffering — and it’s all over much too soon.  -Woody AllenExistential thoughts can accompany you while you’re all alone. One can. . . :                                                                                             10 Mar 2019                                                                                                     Foggy Sunrise              :       Foggy Sunrise - Digital Painting on Photoshop:                                                                                             23 Feb 2019                                                                                                     Farm House - Digital Painting              :       Digital Painting - Farm HouseDigital Painting - Farm House from the movie Interstellar. This iconic photo from the movie Interstellar captures the farmhouse that sits in the middle of a cornfield. . . :                                                                                             23 Feb 2019                                                                                                     San Deigo Zoo              :       :                                                                                             11 Nov 2018                                                          &laquo; Prev       1        2        3        4        5        6        7        8        9      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/my-blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/my-blog/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/my-blog/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://localhost:4000/my-blog/page4/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "http://localhost:4000/my-blog/page5/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "http://localhost:4000/my-blog/page6/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 10,
    "url": "http://localhost:4000/my-blog/page7/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 11,
    "url": "http://localhost:4000/my-blog/page8/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 12,
    "url": "http://localhost:4000/my-blog/page9/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:           {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}      {% endif %}             All Stories:               {% for post in paginator. posts %}        {% include postbox. html %}         {% endfor %}          {% include pagination. html %}"
    }, {
    "id": 13,
    "url": "http://localhost:4000/my-blog/welcome-to-jekyll/",
    "title": "Welcome to Jekyll!",
    "body": "2019/03/22 - You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated. To add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post. ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works. Jekyll also offers powerful support for code snippets: def print_hi(name) puts  Hi, #{name} endprint_hi('Tom')#=&gt; prints 'Hi, Tom' to STDOUT. Check out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk. "
    }, {
    "id": 14,
    "url": "http://localhost:4000/my-blog/your-filename/",
    "title": "Your Filename",
    "body": "2019/03/22 - A New Post: Enter text in Markdown. Use the toolbar above, or click the ? button for formatting help. Test blog "
    }, {
    "id": 15,
    "url": "http://localhost:4000/my-blog/astronaut-in-farm-field/",
    "title": "Astronaut in a farm field",
    "body": "2019/03/10 - Astronaut in a farm&nbsp;field Life is full of misery, loneliness, and suffering — and it’s all over much too soon.  -Woody AllenExistential thoughts can accompany you while you’re all alone. One can easily switch off the context of time and space, and travel to the very mental fabric that keeps us in motion regardless of the fact that we are clinging on a hanging rock — a tiny spark in the midst of a vast, dark, endless, meaningless cosmos. I watched Annie Hall a few weeks ago, then I went on to look out for movie reviews — a usual ritual when I watch something I really like. I start with Roger Ebert, and then go to youtube and then starts my ride into the rabbit hole. A story junky, trying to connect an endless string of meaningless dots to tie it up and sum up a meta-story. As I went through the monologues, scenes, and interviews of Woody Allen, there’s a constant rumbling of existential musings in all of his work - rendered in a humorous and witty format. He is quite a personality and known for his dark comedy. This scene from the movie “Play it again Sam” has become one of my favorite comedy:Allan:&nbsp;That’s quite a lovely Jackson Pollack, isn’t it?Museum Girl:&nbsp;Yes, it is. Allan:&nbsp;What does it say to you?Museum Girl:&nbsp;It restates the negativeness of the universe. The hideous lonely emptiness of existence. Nothingness. The predicament of Man forced to live in a barren, Godless eternity like a tiny flame flickering in an immense void with nothing but waste, horror, and degradation, forming a useless bleak straitjacket in a black absurd cosmos. Allan:&nbsp;What are you doing Saturday night?Museum Girl:&nbsp;Committing suicide. Allan:&nbsp;What about Friday night?Another favorite sequence - monologue from the movie&nbsp;“Hannah and her sisters”Mickey (V. O)Millions of books written on every conceivable subject by all these great minds, and, and in the end, none of ’em knows anything more about the big questions of life than I do. Ss — I read Socrates. You know, n-n-n — , this guy used to knock off little Greek boys. What the hell’s he got to teach me?And, and Nietzsche with his, with his Theory of Eternal Recurrence. He said that the life we live, we’re gonna live over and over again the exact same way for eternity. Great. That means I, uh, I’ll have to sit through the Ice Capades again. Tch. It’s not worth it. The movie next cuts to a sunny day in Central Park. A male jogger, seen through some tree branches, runs by. The camera moves past him, revealing a pondering Mickey walking by the reservoir. He continues to talk over the screen. Mickey (V. O)And, and Freud, another great pessimist. Jeez, I was in analysis for years. Nothing happened. My poor analyst got so frustrated. The guy finally put in a salad bar. Several joggers pass Mickey; he continues to ruminate. Mickey (V. O)Oh! Look at all these people jogging…trying to stave off the inevitable decay of the body. Boy (smacking his lips) it’s so sad what people go through with their-their stationary bike and their exercise and their…(glancing at a fat woman jogger in a red sweatsuit who runs by)…Oh! Look at this one! Poor thing. My God, she has to tote all that fat around. Maybe the poets are right. Maybe love is the only answer. After this episode of drenching my self in the dark humor on nihilism for a few days which I think was quite entertaining, and food for thought. But the laughter and the lightheartedness got dried out, and left me with the quest for existential ‘answer’. The last time I went on an existential episode was at 22 when I landed my first job, and felt like I hit a stone wall. Too early to call it a quarter-life crisis. My mom used to say that I was always a little ahead in my growth as a child. I started walking way earlier than other kids, but began to talk much later. Maybe life was kicking in early for me to be prepared for what’s to come. Then it slowly faded away, after some reading, some exploration, and a lot of rest and time. This time when it hit me, it wasn’t as negative as it got me the first time. I didn’t face an existential crisis, but a lot more curiosity to look out for the meaning of existence crept in. From my previous episode, I came to closure as I realized that ‘Existence precedes essence’ and existential thoughts are a mere outcome of the evolution of the brain. As I got hitched with&nbsp;neuroscience, and began to learn about the brain regions were consciousness sits, and that experiences such NDEs can be triggered in lab conditions, opened up a whole new area to explore, and postpone the run towards finding ultimate answer. &nbsp;Neuroscience&nbsp;became the near term answer that I thought would help me answer the other bigger questions.  It now seems increasingly likely that the self is not a holistic property of the entire brain; it arises from the activity of specific sets of interlinked brain circuits. But we need to know which circuits are critically involved and what their functions might be. It is the “turning inward” aspect of the self — its recursiveness — that gives it its peculiar paradoxical quality.  - V. S. RAMACHANDRAN, a neuroscientist, is Director, Center for Brain and Cognition, University of California, San DiegoRecently I learned a concept of&nbsp;emergence, a natural phenomenon that is witnessed in all of nature. Emergence is a concept in which a system of simple entities form a larger more intelligent and complex system. A question arises, is consciousness an emergent property of the neurons in our brain?As I read and ponder over these topics, I turned to science to look for answers. I’m glad I’m in 2019, and quite a number of people have already thought about this and conducted research to produce and preserve so many recorded materials. Understanding the age of the universe, and going across the several fateful events that led to what we call as human life if an amazing trip. After getting a sense of the eternal length of time, and the scope of endless space in our cosmos. Having reached the microscopic end of quarks that are several billion times smaller — the particles that make up all of the universes, and to have gone to the macroscopic beginnings to the beginning of time and space. One can simply be mesmerized with the big history, and merely live with the awe feeling of being part of the bigger story, and learn some humility. Or one can gaze at the grandeur dance of the stardust, and personify the home planet — earth and cherish reading through the fortunate events that made this a home for life. And breeze through rising of civilizations, and history to where we are today. This still leaves us with the question? the why ultimatum — Why does the universe exist?Why does the universe&nbsp;exist?For this question, we need to turn to reflective physicists. &nbsp;Here’s a transcription of a&nbsp;talk by Jim Holt: We just see a little tiny part of reality that’s described by the laws of quantum field theory, but there are many, many other worlds, parts of reality that are described by vastly different theories that are different from ours in ways we can’t imagine, that are inconceivably exotic. So we have this vastly rich multiverse that encompasses every logical possibility. We have sheer nothingness on one side, and we have this vision of a reality that encompasses every conceivable world at the other extreme: the fullest possible reality, nothingness, the simplest possible reality. Now, that’s in between these two extremes? There are all kinds of intermediate realities that include some things and leave out others. o one of these intermediate realities is, say, the most mathematically elegant reality, that leaves out the inelegant bits, the ugly asymmetries and so forth. But what are we leaving out here? There’s also just the crummy, generic realities that aren’t special in any way, that are sort of random. They’re infinitely removed from nothingness, but they fall infinitely short of complete fullness. They’re a mixture of chaos and order, of mathematical elegance and ugliness. So I would describe these realities as an infinite, mediocre, incomplete mess, a generic reality, a kind of cosmic junk shot. So I would like to propose that the resolution to the mystery of existence is that the reality we exist in is one of these generic realities. Reality has to turn out some way. It can either turn out to be nothing or everything or something in between. So if it has some special feature, like being really elegant or really full or really simple, like nothingness, that would require an explanation. But if it’s just one of these random, generic realities, there’s no further explanation for it. And indeed, I would say that’s the reality we live in. That’s what science is telling us. At the beginning of the week, we got the exciting information that the theory of inflation, which predicts a big, infinite, messy, arbitrary, pointless reality, it’s like a big frothing champagne coming out of a bottle endlessly, a vast universe, mostly a wasteland with little pockets of charm and order and peace.  Okay, that does answer a lot of the questions about the universe in terms of physics. It does a very good job at explaining why the basic laws of physics occur, and the possibilities of different realities, and tied to strong scientific evidence, which gives us a feeling of some level of certainty or assurance as to this is what happened. But why?Here’s the answer to that from Jim Holt: Why do I exist? Why do you exist? you know, our existence would seem to be amazingly improbable, because there’s an enormous number of genetically possible humans, if you can compute it by looking at the number of the genes and the number of alleles and so forth, and a back-of-the-envelope calculation will tell you there are about 10 to the 10,000th possible humans, genetically. That’s between a googol and a googolplex. And the number of the actual humans that have existed is 100 billion, maybe 50 billion, an infinitesimal fraction, so all of us, we’ve won this amazing cosmic lottery. We’re here. Okay. So what kind of reality do we want to live in? Do we want to live in a special reality? Or, what if we were living in the fullest possible reality? Well then our existence would be guaranteed, because every possible thing exists in that reality, but our choices would be meaningless. If I really struggle morally and agonize and I decide to do the right thing, what difference does it make, because there are an infinite number of versions of me also doing the right thing and an infinite number doing the wrong thing? So my choices are meaningless. So we don’t want to live in that special reality. And as for the special reality of nothingness, we wouldn’t be having this conversation. So I think living in a generic reality that’s mediocre, there are nasty bits and nice bits and we could make the nice bits bigger and the nasty bits smaller and that gives us a kind of purpose in life. The universe is absurd, but we can still construct a purpose, and that’s a pretty good one, and the overall mediocrity of reality kind of resonates nicely with the mediocrity we all feel in the core of our being. And I know you feel it. I know you’re all special, but you’re still kind of secretly mediocre, don’t you think? We live in a mediocre reality, and we don’t have the pressure to live up to an elegant universe, or not at all exist in nothingness, or at the multi-branching multi-verse. I guess with the flaws, and foolishness, at an absurd random place in the realm of realities, and to know the fact that this version of existence is infinitely impossible that we are here and now — is a feel-good moment. I would say I’m satisfied with the answers so far, and now that I can go to normal life, and continue to live life as I know it, with a far more appreciation to the little things of every day. &nbsp;Until I’m being haunted by my next question. Looking forward to the next big endeavor the humans will pursue, travel to Mars with plans to colonize the planet. To improve the chances of our survival, and become a multi-planetary species, as we predict that the earth will die in a billion years, and the sun, and every other star. With the universe ultimately closing down with all of the particles we know to be torn apart to the heat death, black holes evaporating and everything vanishes to a state from where it all started — nothingness. &nbsp;Today, I’m here, alive, and being what I can, doing what I love. A beating heart, and a burning brain. Living my story at the speed of light, the speed of sound, and the speed of thought. Composed of carbon, hydrogen, oxygen and many more — the same ones that make up the stars in the sky. With a little ego — an identity to hold up myself as an artist, an engineer, a hacker, an entrepreneur and a student of life. So, I got this picture in my head, ‘an astronaut standing in the middle of a farm field’. As I was looking out for reference images, I found this stock image which was quite right, and it actually had ‘Houston’ in the board in his hand. I had changed it to Mars. And I haven’t mixed up and played with oil colors as much I devoured it in this painting. It’s a simple piece, but took me about 4 and a half hours to come to a satisfactory place. As you can see, the colors in this painting are very vibrant, and a little exaggeration of reality. Even the background mountains which are usually less saturated, and blurred are quite colorful. I really didn’t set out the color palette before I started, and just went with the flow. As I was painting the astronaut, I rambled with different shades for the shadows and the highlights. The Right side of his space suit has a bright orange tint, while the other half has a nice turquoise translucent glow, adding up more character to the image. I hope you found this post worthwhile and hope you also check out the time-lapse video below. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/my-blog/foggy-sunrise/",
    "title": "Foggy Sunrise",
    "body": "2019/02/23 - Foggy Sunrise - Digital Painting on Photoshop"
    }, {
    "id": 17,
    "url": "http://localhost:4000/my-blog/farm-house-digital-painting/",
    "title": "Farm House - Digital Painting",
    "body": "2019/02/23 - Digital Painting - Farm HouseDigital Painting - Farm House from the movie Interstellar. This iconic photo from the movie Interstellar captures the farmhouse that sits in the middle of a cornfield set in the not so distant future. A future where we humans have exhausted most of the natural resources, turning our planet to mere dust. I recently watched this documentary called 'One Strange Rock' hosted by Will Smith that explores a larger perspective of the earth through the eyes of 10 astronauts who have spent a total of more than 1000 days in space. It's an incredibly delightful docuseries I've come across in 2019. I'd recommend for anyone who wants to sit back and get bewildered by the wonders of the cosmos both on a microscopic &amp; a macroscopic level. Peggy Whitson's story featured in the last episode of the documentary really got my admiration. She was born in the 60s and grew upon on a farm outside of the town of Beaconsfield, Iowa. She had spent most of her childhood, and early young age on the farm. Who had known at that time this young girl from a town in Iowa would become the person with a record of the highest time spent in space - a total 0f 665 days. Not only that, she holds the highest number of spacewalks, and several other records. It reminded me of the 'Murph' character from the movie Interstellar. &nbsp;Being associated with farming, and taking a step towards space exploration I think is quite a remarkable mission. Having spent your life taking from the earth, and having that as your main source of income, and then looking at the cosmos to foresee that the planet earth from which we came from will no longer be able to sustain human life after a point. And to having work towards finding/building a new home, is not a mission of a generation or two. It is the longest project that the human species will ever pursue. "
    }, {
    "id": 18,
    "url": "http://localhost:4000/my-blog/san-deigo-zoo/",
    "title": "San Deigo Zoo",
    "body": "2018/11/11 - "
    }, {
    "id": 19,
    "url": "http://localhost:4000/my-blog/belle-bay-bridge/",
    "title": "Belle & The Bay Bridge",
    "body": "2018/10/27 - Belle &amp; The Bay BridgeCanon 600D"
    }, {
    "id": 20,
    "url": "http://localhost:4000/my-blog/red-flower/",
    "title": "Red Flower",
    "body": "2018/10/14 - Red FlowerCanon 600DEFS 55 - 250mm"
    }, {
    "id": 21,
    "url": "http://localhost:4000/my-blog/powerful-things-markdown-editor/",
    "title": "Powerful things you can do with the Markdown editor",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}HTML: 12345&lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: 12345678. highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: 123456789// alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: 1print( Hello World )Ruby: 123require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: 1printf( Hello World ); Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 22,
    "url": "http://localhost:4000/my-blog/first-mass-produced/",
    "title": "The first mass-produced book to deviate from a rectilinear format",
    "body": "2018/06/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/my-blog/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}If you want to get really fancy, you can even add syntax highlighting using Rouge.  Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 24,
    "url": "http://localhost:4000/my-blog/acumulated-experience/",
    "title": "Accumulated experience of social living",
    "body": "2018/06/12 - The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. "
    }, {
    "id": 25,
    "url": "http://localhost:4000/my-blog/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 26,
    "url": "http://localhost:4000/my-blog/logan-painting/",
    "title": "Logan Painting",
    "body": "2018/04/17 - Logan - iPad PaintingProcreate | Wacom Intuous Creative Stylus |&nbsp;iPad Mini 3 |&nbsp;Resolution 800px~"
    }, {
    "id": 27,
    "url": "http://localhost:4000/my-blog/we-all-wait-for-summer/",
    "title": "We all wait for summer",
    "body": "2018/01/12 - As I engage in the so-called “bull sessions” around and about the school, I too often find that most college men have a misconception of the purpose of education. Most of the “brethren” think that education should equip them with the proper instruments of exploitation so that they can forever trample over the masses. Still others think that education should furnish them with noble ends rather than means to an end. It seems to me that education has a two-fold function to perform in the life of man and in society: the one is utility and the other is culture. Education must enable a man to become more efficient, to achieve with increasing facility the ligitimate goals of his life. "
    }, {
    "id": 28,
    "url": "http://localhost:4000/my-blog/tree-of-codes/",
    "title": "Tree of Codes",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. "
    }, {
    "id": 29,
    "url": "http://localhost:4000/my-blog/red-riding/",
    "title": "Red Riding Hood",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 30,
    "url": "http://localhost:4000/my-blog/press-and-education/",
    "title": "Press and education",
    "body": "2018/01/12 - Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 31,
    "url": "http://localhost:4000/my-blog/options-for-creating-new-site-with-jekyll/",
    "title": "Options for creating a new site with Jekyll",
    "body": "2018/01/12 - jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are some additional details:  To install the Jekyll site into the directory you’re currently in, run jekyll new . If the existing directory isn’t empty, you can pass the –force option with jekyll new . –force.  jekyll new automatically initiates bundle install to install the dependencies required. (If you don’t want Bundler to install the gems, use jekyll new myblog --skip-bundle. ) By default, the Jekyll site installed by jekyll new uses a gem-based theme called Minima. With gem-based themes, some of the directories and files are stored in the theme-gem, hidden from your immediate view.  We recommend setting up Jekyll with a gem-based theme but if you want to start with a blank slate, use jekyll new myblog --blank To learn about other parameters you can include with jekyll new, type jekyll new --help. "
    }, {
    "id": 32,
    "url": "http://localhost:4000/my-blog/never-stopped-worrying-never-loved-bomb/",
    "title": "Never stopped worrying or loving the bomb",
    "body": "2018/01/12 -  I’ve been through fire and water, I tell you! From my earliest pebblehood the wildest things you could imagine have been happening to this world of ours, and I have been right in the midst of them. So begins Hallam Hawksworth’s The Strange Adventures of a Pebble. Written in the 1920s, the book was part of a series which also included The Adventures of a Grain of Dust and A Year in the Wonderland of Trees, all of which were supposed to introduce children to the world of Natural Sciences. In each of them, Hawksworth personifies the natural object he is exploring, and using a mixture of folk tales, scientific facts and colloquial, friendly explanations guides the reader through the history of the natural world. It’s a real thrill of a ride, dramatizing the life cycle of supposedly dull things. The Adventures of a Grain of Dust begins even more loudly than Pebble: I don’t want you to think that I’m boasting, but I do believe I’m one of the greatest travellers that ever was; and if anybody, living or dead, has ever gone through with more than I have I’d like to hear about it. Hallam Hawksworth was the pen-name of teacher Francis Blake Atkinson. He was married to the author Eleanor Stackhouse Atkinson, author of the children’s classic Greyfriars Bobby, which was based on the (supposedly) true story of a Scottish dog who spent fourteen years guarding his masters grave. The couple were both committed to education and published a weekly magazine for Chicago high school students called The Little Chronicle, as well as working for Encyclopaedia companies later in life. "
    }, {
    "id": 33,
    "url": "http://localhost:4000/my-blog/is-intelligence-enough/",
    "title": "External Featured Image",
    "body": "2018/01/12 - Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 34,
    "url": "http://localhost:4000/my-blog/quick-start-guide/",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 35,
    "url": "http://localhost:4000/my-blog/customer-service/",
    "title": "Inception Movie",
    "body": "2018/01/11 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Mediumish! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: 12345678910---layout: posttitle:  Inception Movie author: johncategories: [ Jekyll, tutorial ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }, {
    "id": 36,
    "url": "http://localhost:4000/my-blog/amrit-maghera/",
    "title": "Amrit Maghera",
    "body": "2015/07/28 - App : ProcreateStylus : Wacom Intuos&lt;/source&gt;&lt;/source&gt;&lt;/source&gt;&lt;/source&gt;"
    }, {
    "id": 37,
    "url": "http://localhost:4000/my-blog/one-flew-over-cuckoos-nest/",
    "title": "One flew over the cuckoos nest",
    "body": "2015/03/19 - &lt;/source&gt;One of my favorite movies of all time. Amazing screenplay , very deep and detailed characterization. Great performance by Jack Nicholson and the rest of the cast. Brilliant movie. "
    }, {
    "id": 38,
    "url": "http://localhost:4000/my-blog/blog-post/",
    "title": "Parrot Green",
    "body": "2015/03/05 - This beauty little birdy came flew into our house and was there with us for a little while. &lt;/source&gt;&lt;/source&gt;&lt;/source&gt;&lt;/source&gt;Camera&nbsp;:&nbsp;Canon&nbsp;DSLR&nbsp;600DLens&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;EFS&nbsp;18-55mm &amp; EFS 55-250mmShot under natural lightingDeveloped in&nbsp;Adobe Lightroom"
    }, {
    "id": 39,
    "url": "http://localhost:4000/my-blog/blog-post/",
    "title": "More good times !",
    "body": "2014/11/05 - App : ProcreateStylus : Wacom Intuos&lt;/source&gt;&lt;/source&gt;&lt;/source&gt;&lt;/source&gt;"
    }, {
    "id": 40,
    "url": "http://localhost:4000/my-blog/begin-again/",
    "title": "Begin Again",
    "body": "2014/10/31 - Watched this movie a few days back and liked it . A catchy title , at least for me at this point in life . Where I just quit my job as as VFX artist and facing a great dilemma to either study MFA or get into doing business in my hometown in a whole different realm . This title intrigues me into starting arts again , to open a new page and get going (this time seriously) . Lets see where this is going . . . Also check out the time-lapse video of the painting process below : "
    }, {
    "id": 41,
    "url": "http://localhost:4000/my-blog/photographed-it-specifically-to-paint/",
    "title": "Photographed it specifically to paint ",
    "body": "2014/10/31 - It was around 11 in the morning , just woke up from bed . I wanted to do a painting with a composition that has very strong lighting . I found this pot in the outdoor corner of my house . Its actually an hanging pot that is almost touching the ground . Liked the way it was partly lit by sunlight and hoped it would bring out realism in the painting . Took a bunch of snaps and imported it in the 'Brushes' app on the iPad . Traced out a rough outline as a reference and started painting the rest . It was a rewarding experience after a very long time . Finally , imported the painting into Adobe PS in iPad , applied a vignette and color corrected just a pinch . &nbsp;"
    }, {
    "id": 42,
    "url": "http://localhost:4000/my-blog/strokes-and-words/",
    "title": "Strokes and Words",
    "body": "2013/12/22 - Some people express by words , some by action , some by music and a few by arts . Words are the most convenient form of expression . Its easy but limited . In a world filled with a &nbsp;myriad of emotions and meanings , to express verbally is as tough as making a salad with just one fruit or making a cocktail with only one drink . When we are lost in the musing of our perplexed mind , is it words that's rambling or just thoughts that is yearning to be identified as a word . To express the thought with resolute authenticity is to kill the structure of the language . But thats not the case with arts . An abstract art contains copious amount of thoughts poured on to a canvas . To translate that in to words would take up to millions of them , mostly repetitive and would only produce a pulp of the expression . So indigenous is art , hence requires no grammar or structure . Each one has its own style to stroke emotions . Art is an effortless way to convey deep and complex thoughts , that couldn't be expressed in the form of words . Yes it is vile to criticize words with words , how else could one proliferate the qualities of art without words , with art ?? To do that is like explaining a sign board with another sign board . That is where words find their essentiality . One cannot neglect the other , for none can survive without the other (strokes and words) . So far in life I have been day dreaming most of the time . On a blue moon I express them on a canvas(digital) . Now that I have started loving words , I get the fun in defining stuffs with clarity and a structure . To express in a contrived manner with words in their grammar is as joyful as to express on a canvas with insane amount of freedom . In such scenarios , freedom and restrain mean the same . That is where the words transcend their individual meaning to define a vague expression , thus losing their structure but winning their purpose . I feel that there is an artist in every writer and a writer in every artist . Treating words as arts and arts as words transcends their boundaries and reach ultimate expression . May be that is why its said  Art of Writing  . But for me its the Joy of writing . Visit - www. uxcrammer. com for UX resources. "
    }, {
    "id": 43,
    "url": "http://localhost:4000/my-blog/portrait-of-ramana-maharishi/",
    "title": "Portrait of Ramana Maharishi",
    "body": "2013/11/13 - I&nbsp;admire palette knife painting, especially ones with blocky strokes . I didn't have any conscious intention to make one . But after doing this portrait in Artrage(iPad) , I have gained quite an amount confidence to attempt palette knife painting in the future . Ramana Maharshi&nbsp;(1879–1950) is widely acknowledged as one of the outstanding Indian gurus&nbsp;of modern times. Ramana's teachings on Self-enquiry originated in his own awakening at age 16, when he became firmly aware of death. It made him aware of the Self. Ramana&nbsp;Maharishi&nbsp;taught that every conscious activity of the mind or body, for example 'I think', 'I remember', 'I feel' 'I am acting', etc. , revolves around the tacit assumption that there is an individual 'I' who is doing something, a common factor and mental fiction termed the 'I'-thought (a translation of Aham-Vritti, which literally means 'mental modification of 'I'). The individual  I  from which all thoughts arise is the ego/mind itself. Sri Ramana equated individuality with the mind and the mind with the 'I'-thought which is dependent upon identification with an object, and said that after&nbsp;Self-realization there&nbsp;is no thinker of thoughts, no performer of actions and no awareness of individual existence. When the thoughts arise, he said, the 'I'-thought claims ownership of them — 'I think', 'I believe', 'I want', 'I am acting'. The individual  I' is the ego mind itself. In reality, truth, there is no separate 'I' that exists independently of the objects that it is identifying with, rather, an incessant flow of misidentifications based on an initial assumption that the 'I' is individual and associated with the bodily form. He considered this 'I am the body' idea as the primary source of all subsequent wrong identifications and its dissolution as the principal aim of self-enquiry. "
    }, {
    "id": 44,
    "url": "http://localhost:4000/my-blog/using-adobe-ideas-fro-ipad/",
    "title": "Using Adobe Ideas fro the iPad",
    "body": "2013/05/24 - Its a cool app . Its the most robust among all other drawing apps . Its pretty smooth , perfect set of tools for illustrating . Was fun working . "
    }, {
    "id": 45,
    "url": "http://localhost:4000/my-blog/illustration-of-charlie-kaufman/",
    "title": "Illustration of Charlie Kaufman",
    "body": "2013/05/24 - This one's done in the iPad using  Adobe Ideas  . Usually Illustrations don't involve shadows , i just wanted to have some depth ,so I threw some shadows . I didn't want it to bother the existing lines , so used red instead of black . They are parts of the same painting but yet different . Part of the whole and whole of the part , Synecdoche!!! I recently watched  Adaptation  . Immediately I wanted to watch  Synecdoche , New York   , and I did . The guy is a fucking genius . He is so sincere to film-making and writing . Another great script from this guy is  Eternal Sunshine of the spotless Mind   Directed by Michel Gondry , one of my favorite movies . I like the way he reflects his thoughts over his script . And all the absurdity and illusions created on screen just like the way it happens in one's mind . Uncompromising and authentic work of art delivered directly from his mind . Do check out the video below . "
    }, {
    "id": 46,
    "url": "http://localhost:4000/my-blog/typo-mograph/",
    "title": "Typo Mograph",
    "body": "2013/04/16 - Typo Motion Graphics from Narayanan on Vimeo.  "
    }, {
    "id": 47,
    "url": "http://localhost:4000/my-blog/ipad-art/",
    "title": "iPad Art",
    "body": "2013/03/25 - &nbsp;Painted using Brushes app on iPad&nbsp;: Samuel Jackson from the movie 1408 . Using SketchBook Pro on iPad . &nbsp;: Concept art using Art Rage iPadUsing Brushes 3 on iPad . "
    }, {
    "id": 48,
    "url": "http://localhost:4000/my-blog/whatidoallday/",
    "title": "WhatIdoAllDay",
    "body": "2012/11/18 - whatidoalldayshdw from Narayanan on Vimeo. Worked out a script on AE from VCP . "
    }, {
    "id": 49,
    "url": "http://localhost:4000/my-blog/activity/",
    "title": "Activity",
    "body": "2012/11/18 - Activity from Narayanan on Vimeo. Worked out a script on AE from VCP . "
    }, {
    "id": 50,
    "url": "http://localhost:4000/my-blog/quoart/",
    "title": "Quoart !",
    "body": "2012/11/18 - Art is a complex expression with diverse conveyance of thoughts built by emotions . "
    }, {
    "id": 51,
    "url": "http://localhost:4000/my-blog/jack-nicholson/",
    "title": "Jack Nicholson ",
    "body": "2012/10/26 - Jack Nicholson ,one my favourite actors . "
    }, {
    "id": 52,
    "url": "http://localhost:4000/my-blog/the-gonzo-dream/",
    "title": "The Gonzo Dream",
    "body": "2012/09/15 - The Gonzo Dream-FinalIt was 3'o clock in the afternoon , I was attending a boring session of aptitude training along 3000 people in my college auditorium . I wasn't feeling sleepy . I started by drawing a shape . Then started building on it . I got some pretty decent shapes which formed the top left part of the illustration . Then made some random lines . I got the idea only from this point . Until this part I was doing random pointless scribbling . Then I saw the lines giving me some kind of perspective&nbsp; ,I grabbed it and went on with it developing elements while keeping the concept alive . Then did the usual color stuff (red ,grey ,black) in photoshop . Couldn't leave the habit of using red and grey. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Sketch: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Colored using Photoshop"
    }, {
    "id": 53,
    "url": "http://localhost:4000/my-blog/3d-typography/",
    "title": "3D Typography",
    "body": "2012/08/20 - Had an idea to do a funky and a little bit futuristic typography . Sketched out something that came into my mind . In illustrator , I traced out the outlines and extruded it create a 3D effect . Exported to Photoshop for further work . Created a custom pattern with thick lines of red ,black and white colors . Distorted , skewed and transformations . Then masked them to fill the 3d extruded part . Then applied it on the front part of the text as well . Added some grunge texture with the 'Darker color' mode . Didn't expect this when I first imagined a typography . Then I realized that I am always ending up with some grunge stuff with red ,black being the major color in it . After all everyone has their own style . This is mine !Sketch - BallPoint&nbsp;Outline - Illustrator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Photoshop for applying pattern and textures. Shadows and shines for the extruded parts . Adding grunge textures to the text and a rocky texture for the extruded areas . Adding Background . "
    }, {
    "id": 54,
    "url": "http://localhost:4000/my-blog/nagris-fakhri-painting/",
    "title": "Nagris Fakhri - Painting",
    "body": "2012/06/09 - This is the first time I tried painting using water colors , I really couldn't stop over doing things in this piece , I spent almost half a day with this portrait . Learned a lot from this experience . Wow , painting is pleasurable . I bought some brushes recently when my bro was getting stationary for his school few days back, Yesterday morning I saw them on my desk , I thought may be I would try something with it . I had this picture of Nagris Fakhri in my pc . Thought may be I could do a quick rough paint job, bcoz I don't really have any painting experience , like do a rough one first and then do the final one . But I started getting really in to the painting and went with the details . When I almost finished , I found that there were some mistakes . Then I spent a lot of time from then on and finally I got something satisfying . "
    }, {
    "id": 55,
    "url": "http://localhost:4000/my-blog/hancock/",
    "title": "Hancock",
    "body": "2012/06/08 - I don't know why I do most of the sketches late at night . That other night , I saw the DVD cover of the movie  Hancock  . It was besides my sketchbook . I grabbed 'em and sketched . It turned out better than I thought . Scanned it and refined it , added colors using photoshop . &nbsp;I really couldn't decide which one is better among the two of these ,"
    }, {
    "id": 56,
    "url": "http://localhost:4000/my-blog/self-portrait-pen-sketch/",
    "title": "Self Portrait - Pen Sketch",
    "body": "2012/05/28 - I didn't draw this using a mirror instead used my photo as a reference for creating this portrait . Used blue ball point pen . Painted using grunge and splatter brushes in Photoshop. "
    }, {
    "id": 57,
    "url": "http://localhost:4000/my-blog/pen-sketch-srk-police-ad/",
    "title": "Pen Sketch - SRK (Police Ad)",
    "body": "2012/05/26 - One bright morning in the class room , couldn't remain idle in the class . Saw a portrait of SRK in the newspaper . Took an hour to complete the pen sketch&nbsp; ,then spent a few minutes&nbsp; coloring the shades using color pencils . Made a few touches using photoshop . Masked the shades and tried out different colors . "
    }, {
    "id": 58,
    "url": "http://localhost:4000/my-blog/pen-sketch-god-of-war/",
    "title": "Pen Sketch - God of War",
    "body": "2012/05/26 - God of War . "
    }, {
    "id": 59,
    "url": "http://localhost:4000/my-blog/pencil-sketch-wolverine/",
    "title": "Pencil Sketch - Wolverine",
    "body": "2012/05/26 - Wolverine , my favorite super hero . "
    }, {
    "id": 60,
    "url": "http://localhost:4000/my-blog/pen-sketch-buddha/",
    "title": "Pen Sketch - Buddha",
    "body": "2012/05/26 - &nbsp;The original Pen sketch of Buddha&nbsp; . I bought a Buddha portrait made out of wood from Bangkok . It was a night when I was sitting idle in front of it over some time&nbsp; ,I began sketching it . Sketching this one was pleasurable. Basic color balance in Picasa editor . "
    }, {
    "id": 61,
    "url": "http://localhost:4000/my-blog/twisted-brush-kobe-bryant-dunk/",
    "title": "Twisted Brush - Kobe Bryant Dunk",
    "body": "2012/05/26 - "
    }, {
    "id": 62,
    "url": "http://localhost:4000/my-blog/twisted-brush/",
    "title": "Twisted Brush - Clint Eastwood",
    "body": "2012/05/26 - "
    }, {
    "id": 63,
    "url": "http://localhost:4000/my-blog/pencil-sketch-1/",
    "title": "Pencil Sketch 1",
    "body": "2012/05/26 - Drew this in 2007 , before the last board exam . There was a black and white photo in the newspaper which caught my attention . I thought it would make a good sketch . &nbsp; "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});