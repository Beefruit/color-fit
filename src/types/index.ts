export interface IUserProfile {
  id: string;
  nickname: string;
  avatar_url: string;
  personal_color_tag: {
    id: string;
    name: string;
    color: string;
  };
}
