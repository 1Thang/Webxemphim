<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
  
    public function index()
    {
        $user = User::all();
        if ($user->count() > 0) {
            return response()->json([
                'status' => 200,
                'content' => $user
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no user found'
            ], 404);
        }
    }
 
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'name' => 'required|string|max:255',
            'age' => 'required|integer|min:12',
            'role' => 'required|string|in:admin,user',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 500,
                'message' => $validator->errors()->first()
            ], 500);
        }
    
        // Kiểm tra email đã tồn tại trước khi tạo mới
        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                'status' => 500,
                'message' => 'Email đã được sử dụng'
            ], 500);
        }
    
        // Tạo người dùng mới
        User::create([
            'name' => $request->name,
            'age'  => $request->age,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => $request->role,
            'sdt' => $request->sdt,
        ]);
    
        // Trả về thông báo thành công
        return response()->json([
            'status' => 200,
            'message' => "User successfully created."
        ], 200);
    }
    
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::where('id', $id)->first();
        if ($user) {
            return response()->json([
                'status' => 200,
                'content' => $user
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no user found'
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy người dùng!'
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'email' => 'unique:users,email,' . $id,
          
            'name' => 'required|string|max:255',
            'age' => 'required|integer|min:12',
            'role' => 'required|string|in:admin,user',
            'password' => [
                    'required',
                    'min:8',
                    'confirmed',
                    'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'
                ],
       
            
            
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 500,
                'message' => $validator->errors()->first()
            ], 500);
        }
    
        // Cập nhật thông tin người dùng
        $user->name = $request->input('name');
        $user->age = $request->input('age');
        $user->email = $request->input('email');
        $user->role = $request->input('role');
        $user->sdt = $request->input('sdt');
    
        // Lưu thay đổi vào cơ sở dữ liệu
        $user->save();
    
        // Trả về thông báo thành công
        return response()->json([
            'status' => 200,
            'message' => 'User updated successfully',
            'content' => $user
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::where('id', $id)->first();
        if ($user) {
            $user->delete();
            return response()->json([
                'status' => 200,
                'message' => 'User deleted successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No such user found'
            ], 404);
        }
    }
}
