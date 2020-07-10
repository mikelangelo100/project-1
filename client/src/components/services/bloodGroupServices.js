import http from './httpService'

export function getBloodGroups() {
    return http.get('http://localhost:5000/api/bloodGroups');
}

export function getUsername() {
    return http.get('http://localhost:5000/api/profile/username');
}