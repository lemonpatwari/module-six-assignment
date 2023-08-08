export default function authMiddleware(to, from, next) {

    const isAuthenticated = localStorage.getItem('users');

    if (isAuthenticated) {
        next();
    } else {
        next('/');
    }
}