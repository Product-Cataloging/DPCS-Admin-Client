export interface Notification {
  id: number;
  title: string;
  message: string;
  delivery_date: string;
  sender: string;
  status: 'Read' | 'Unread';
}

export function createNotification(params: Partial<Notification>) {
  return {

  } as Notification;
}
