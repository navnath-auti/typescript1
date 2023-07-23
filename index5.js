"use strict";
const hitesh = {
    dbId: 22,
    email: 'h@h.com',
    userId: 2211,
    githubToken: 'github',
    startTrail: () => {
        return 'hitesh';
    },
    getCoupon: (name, value) => {
        return 10;
    }
};
const hitesh1 = {
    dbId: 22,
    email: 'h@h.com',
    userId: 2211,
    role: 'admin',
    githubToken: 'github',
    startTrail: () => {
        return 'hitesh';
    },
    getCoupon: (name, value) => {
        return 10;
    }
};
hitesh.email = 'n@n.com';
