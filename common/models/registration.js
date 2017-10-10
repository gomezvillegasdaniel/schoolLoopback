'use strict';

module.exports = function(Registration) {
    Registration.enroll = function(data, cb) {
        let enrollment = Registration.create({
            student: data.student,
            course: data.course,
            semester: data.semester
        });
        cb(null,`Student ${data.student} enrolled in course ${data.course} from semester ${data.semester}`);
    }

    // Registration.observe('after access', function(ctx, next) {
    //     console.log('ctx:',ctx);
    //     return next();
    // });
  
    Registration.remoteMethod('enroll', {
        accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
        http: {verb: "post", path: "/enroll"},
        returns: {arg: 'res', type: 'object', http: {source: 'res'}}
    });
    
};
