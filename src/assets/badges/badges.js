$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/FireMakeThunder.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
      addCourses(response.courses.completed);
      addBadges(response.badges)
    }
  })

  function addBadges(badges) {
    var $plainBadges = $('#plainBadges');

    badges.forEach(function(badge) {
      var $badge = $('<div />', {
        'class': 'course'
      }).appendTo($plainBadges)


      $('<h3 />', {
        text: badge.name
      }).appendTo($badge);

      $('<img />', {
        src: badge.badge
      }).appendTo($badge);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: badge.course_url,
        text: 'See Course'
      }).appendTo($badge);

    });
  }

  function addCourses(courses) {

    var $courseBadges = $('#courseBadges');

    courses.forEach(function(course) {

      var $badge = $('<div />', {
        'class': 'course'
      }).appendTo($courseBadges);

      $('<h3 />', {
        text: course.title
      }).appendTo($badge);

      $('<img />', {
        src: course.badge
      }).appendTo($badge);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($badge);

    });
  }
});
