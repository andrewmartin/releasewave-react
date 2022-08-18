export interface User {
  id: number;
  email: string;
  provider: string;
  image_file_name: string;
  image_content_type: string;
  uid: string;
  allow_password_change: boolean;
  name: string;
  nickname: any;
  is_admin: boolean;
  image_file_size: number;
  image_updated_at: string;
}
