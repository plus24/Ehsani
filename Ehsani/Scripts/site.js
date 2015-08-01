// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    var gwdev = new JustGage({
        id: "skill-wdev",
        value: 0,
        min: 0,
        max: 100,
        title: "Web Development",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    var gcs = new JustGage({
        id: "skill-cs",
        value: 0,
        min: 0,
        max: 100,
        title: "C#.Net",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    var gwdes = new JustGage({
        id: "skill-wdes",
        value: 0,
        min: 0,
        max: 100,
        title: "Web Design",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    var gscripts = new JustGage({
        id: "skill-scripts",
        value: 0,
        min: 0,
        max: 100,
        title: "Scripting Languages",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    var gsc = new JustGage({
        id: "skill-sc",
        value: 0,
        min: 0,
        max: 100,
        title: "Source Controls",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    var gsql = new JustGage({
        id: "skill-sql",
        value: 0,
        min: 0,
        max: 100,
        title: "MSSQL Server",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });

    var gscrum = new JustGage({
        id: "skill-scrum",
        value: 0,
        min: 0,
        max: 100,
        title: "SCRUM",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    var gtools = new JustGage({
        id: "skill-tools",
        value: 0,
        min: 0,
        max: 100,
        title: "Tools",
        label: "%",
        gaugeWidthScale: 0.6,
        levelColors: [
                  "#00fff6",
                  "#6b6b6b  ",
                  "#474d5d"
        ]
    });
    $(window).scroll(function () {
        var windowScrollTop = $(this).scrollTop();
        var pos = $("#keyskills").offset().top;
        if (windowScrollTop >= pos) {
            gwdev.refresh(95);
            gcs.refresh(85);
            gscripts.refresh(80);
            gsql.refresh(75);
            gwdes.refresh(90);
            gsc.refresh(80);
            gtools.refresh(95);
            gscrum.refresh(80);
        }
        else {
            gwdev.refresh(getRandomInt(0, 10));
            gcs.refresh(getRandomInt(0, 10));
            gscripts.refresh(getRandomInt(0, 10));
            gsql.refresh(getRandomInt(0, 10));
            gwdes.refresh(getRandomInt(0, 10));
            gsc.refresh(getRandomInt(0, 10));
            gtools.refresh(getRandomInt(0, 10));
            gscrum.refresh(getRandomInt(0, 10));
        }
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

function sendmessage() {
    var name=$("#name").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    var message=$("#message").val();
    $.ajax({
        type: "POST",
        url: "/Home/SendMsg",
        data: {name:name,email:email,phone:phone,message:message},
        success: function (data) {
            //alert(data);
            //$('#contactform').html("<div id='message'></div>");
            //$('#message').html("<p>Your message has been sent!<br /> Thank you - I will be in touch soon.</p>")
            //.hide()
            //.fadeIn(1500, function () {
            //    $('#message');
            //});
        }
    });
}