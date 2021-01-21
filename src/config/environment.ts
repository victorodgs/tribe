const API_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://localhost:5000';

export default API_URL;
