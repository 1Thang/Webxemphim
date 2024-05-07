

// Định nghĩa các hàm API liên quan đến người dùng
const userApi = {
    // Hàm xử lý đăng nhập
    handleLogin: async (userData) => {
      // Thực hiện gọi API đến endpoint xử lý đăng nhập
      // Trả về kết quả hoặc ném ra một lỗi nếu có lỗi xảy ra
      // Ví dụ:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   body: JSON.stringify(userData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Đăng nhập không thành công');
      // }
      // return data;
    },
  
    // Hàm xử lý đăng ký
    handleRegister: async (userData) => {
      // Thực hiện gọi API đến endpoint xử lý đăng ký
      // Trả về kết quả hoặc ném ra một lỗi nếu có lỗi xảy ra
      // Ví dụ:
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   body: JSON.stringify(userData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Đăng ký không thành công');
      // }
      // return data;
    },
  
    // Hàm lấy danh sách người dùng (ví dụ)
    getUsers: async () => {
      // Thực hiện gọi API đến endpoint lấy danh sách người dùng
      // Trả về danh sách người dùng hoặc ném ra một lỗi nếu có lỗi xảy ra
      // Ví dụ:
      // const response = await fetch('/api/users');
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Không thể lấy danh sách người dùng');
      // }
      // return data;
      return [
        { fullName: 'Người dùng 1', email: 'user1@email.com', phone: '123456789', password:'1123',  },
        { fullName: 'Người dùng 2', email: 'user2@email.com', phone: '987654321' },
      ];
    }
  };
  
  export default userApi;
  