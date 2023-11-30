export interface CreateUserDto {
  id: number;
  email: string;
  password: string;
  isVerified: boolean;
  firstName?: string;
  lastName?: string;
  permissionFlags?: number;
  confirmPassword?: string;
}