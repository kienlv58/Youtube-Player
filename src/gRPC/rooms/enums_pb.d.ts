import * as jspb from 'google-protobuf'



export enum ChatType { 
  CTYPE_UNKNOWN = 0,
  CTYPE_ROOM = 1,
  CTYPE_EVENT = 2,
}
export enum ChatStatus { 
  CSTATUS_UNKNOWN = 0,
  CSTATUS_ACTIVE = 1,
  CSTATUS_INACTIVE = 2,
}
export enum UserTicketStatus { 
  UTSTATUS_UNKNOWN = 0,
  UTSTATUS_ACTIVE = 1,
  UTSTATUS_INACTIVE = 2,
  UTSTATUS_EXPIRED = 3,
}
export enum RoomType { 
  RTYPE_UNKNOWN = 0,
  RTYPE_AUTOMATIC = 4,
  RTYPE_BROADCAST = 1,
  RTYPE_TEMPORARY = 2,
  RTYPE_PERMANENT = 3,
}
export enum RoomAccess { 
  RACCESS_UNKNOWN = 0,
  RACCESS_PUBLIC = 1,
  RACCESS_PRIVATE = 2,
  RACCESS_PROTECTED = 3,
}
export enum RoomUserFlag { 
  RUFLAG_UNKNOWN = 0,
  RUFLAG_SHARING_AUDIO = 1,
  RUFLAG_SHARING_VIDEO = 2,
  RUFLAG_SHARING_SCREEN_AUDIO = 3,
  RUFLAG_SHARING_SCREEN_VIDEO = 4,
  RUFLAG_DISABLED_AUDIO = 5,
  RUFLAG_DISABLED_VIDEO = 6,
  RUFLAG_DISABLED_SCREEN_AUDIO = 7,
  RUFLAG_DISABLED_SCREEN_VIDEO = 8,
}
export enum RoomUserState { 
  RUSTATE_UNKNOWN = 0,
  RUSTATE_DISABLED_AUDIO = 1,
  RUSTATE_DISABLED_VIDEO = 2,
  RUSTATE_DISABLED_SCREEN_AUDIO = 3,
  RUSTATE_DISABLED_SCREEN_VIDEO = 4,
}
export enum RoomUserStatus { 
  RUSTATUS_UNKNOWN = 0,
  RUSTATUS_CONNECTED = 1,
  RUSTATUS_RECONNECTING = 2,
  RUSTATUS_DISCONNECTED = 3,
}
export enum RoomUserSenderConnectionStatus { 
  RUSCSTATUS_UNKNOWN = 0,
  RUSCSTATUS_CONNECTED = 1,
  RUSCSTATUS_CONNECTING = 2,
  RUSCSTATUS_RECONNECTING = 3,
  RUSCSTATUS_DISCONNECTED = 4,
}
export enum RoomUserReceiverConnectionStatus { 
  RURCSTATUS_UNKNOWN = 0,
  RURCSTATUS_CONNECTED = 1,
  RURCSTATUS_CONNECTING = 2,
  RURCSTATUS_RECONNECTING = 3,
  RURCSTATUS_DISCONNECTED = 4,
}
export enum RoomStreamType { 
  RSTYPE_UNKNOWN = 0,
  RSTYPE_AUDIO = 1,
  RSTYPE_IMAGE = 2,
  RSTYPE_VIDEO = 3,
  RSTYPE_EVENT = 4,
  RSTYPE_VIMEO = 5,
  RSTYPE_TIKTOK = 9,
  RSTYPE_SPOTIFY = 6,
  RSTYPE_YOUTUBE = 7,
  RSTYPE_FACEBOOK = 8,
}
export enum EventType { 
  ETYPE_UNKNOWN = 0,
  ETYPE_FREE = 1,
  ETYPE_PAID = 2,
}
export enum EventGenre { 
  EGENRE_UNKNOWN = 0,
  EGENRE_COMEDY = 1,
  EGENRE_SPORT = 2,
  EGENRE_PODCAST = 3,
  EGENRE_INTERVIEW = 4,
  EGENRE_OTHER = 5,
}
export enum EventAccess { 
  EACCESS_UNKNOWN = 0,
  EACCESS_PUBLIC = 1,
  EACCESS_PRIVATE = 2,
}
export enum EventStatus { 
  ESTATUS_UNKNOWN = 0,
  ESTATUS_PLANNED = 1,
  ESTATUS_QUEUED = 2,
  ESTATUS_CREATED = 3,
  ESTATUS_STARTED = 4,
  ESTATUS_FINISHED = 5,
  ESTATUS_CANCELED = 6,
}
export enum EventSource { 
  ESOURCE_UNKNOWN = 0,
  ESOURCE_MCU = 1,
  ESOURCE_LIVESTREAM = 2,
  ESOURCE_STATICSTREAM = 3,
}
export enum EventLayout { 
  ELAYOUT_UNKNOWN = 0,
  ELAYOUT_RECT_ONE = 1,
  ELAYOUT_SQUARE_TWO = 2,
  ELAYOUT_SQUARE_THREE = 3,
}
export enum EventOverseer { 
  EOVERSEER_UNKNOWN = 0,
  EOVERSEER_MANUAL = 1,
  EOVERSEER_AUTOMATIC = 2,
}
export enum EventPerformerStatus { 
  EPSTATUS_UNKNOWN = 0,
  EPSTATUS_AWAITING = 1,
  EPSTATUS_PERFORMING = 2,
}
export enum RecommendationType { 
  RNTYPE_UNKNOWN = 0,
  RNTYPE_YOUTUBE = 1,
}