/* eslint-disable */
// source: mcu/packets.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var mcu_models_pb = require('../mcu/models_pb.js');
goog.object.extend(proto, mcu_models_pb);
goog.exportSymbol('proto.mcu.api.v1.InputPacket', null, global);
goog.exportSymbol('proto.mcu.api.v1.LayoutPacket', null, global);
goog.exportSymbol('proto.mcu.api.v1.OutputControlPacket', null, global);
goog.exportSymbol('proto.mcu.api.v1.OutputControlPacket.RequestCase', null, global);
goog.exportSymbol('proto.mcu.api.v1.OutputPacket', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mcu.api.v1.LayoutPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mcu.api.v1.LayoutPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mcu.api.v1.LayoutPacket.displayName = 'proto.mcu.api.v1.LayoutPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mcu.api.v1.OutputPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mcu.api.v1.OutputPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mcu.api.v1.OutputPacket.displayName = 'proto.mcu.api.v1.OutputPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mcu.api.v1.InputPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mcu.api.v1.InputPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mcu.api.v1.InputPacket.displayName = 'proto.mcu.api.v1.InputPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mcu.api.v1.OutputControlPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mcu.api.v1.OutputControlPacket.oneofGroups_);
};
goog.inherits(proto.mcu.api.v1.OutputControlPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mcu.api.v1.OutputControlPacket.displayName = 'proto.mcu.api.v1.OutputControlPacket';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mcu.api.v1.LayoutPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.mcu.api.v1.LayoutPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mcu.api.v1.LayoutPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.LayoutPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    layout: (f = msg.getLayout()) && mcu_models_pb.Layout.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mcu.api.v1.LayoutPacket}
 */
proto.mcu.api.v1.LayoutPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mcu.api.v1.LayoutPacket;
  return proto.mcu.api.v1.LayoutPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mcu.api.v1.LayoutPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mcu.api.v1.LayoutPacket}
 */
proto.mcu.api.v1.LayoutPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mcu_models_pb.Layout;
      reader.readMessage(value,mcu_models_pb.Layout.deserializeBinaryFromReader);
      msg.setLayout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mcu.api.v1.LayoutPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mcu.api.v1.LayoutPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mcu.api.v1.LayoutPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.LayoutPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLayout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      mcu_models_pb.Layout.serializeBinaryToWriter
    );
  }
};


/**
 * optional Layout layout = 1;
 * @return {?proto.mcu.api.v1.Layout}
 */
proto.mcu.api.v1.LayoutPacket.prototype.getLayout = function() {
  return /** @type{?proto.mcu.api.v1.Layout} */ (
    jspb.Message.getWrapperField(this, mcu_models_pb.Layout, 1));
};


/**
 * @param {?proto.mcu.api.v1.Layout|undefined} value
 * @return {!proto.mcu.api.v1.LayoutPacket} returns this
*/
proto.mcu.api.v1.LayoutPacket.prototype.setLayout = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.LayoutPacket} returns this
 */
proto.mcu.api.v1.LayoutPacket.prototype.clearLayout = function() {
  return this.setLayout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.LayoutPacket.prototype.hasLayout = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mcu.api.v1.OutputPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.mcu.api.v1.OutputPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mcu.api.v1.OutputPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.OutputPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sample: (f = msg.getSample()) && mcu_models_pb.Sample.toObject(includeInstance, f),
    layoutPacket: (f = msg.getLayoutPacket()) && proto.mcu.api.v1.LayoutPacket.toObject(includeInstance, f),
    keyframeRequest: (f = msg.getKeyframeRequest()) && mcu_models_pb.KeyFrameRequest.toObject(includeInstance, f),
    hasMediaPlayer: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    end: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mcu.api.v1.OutputPacket}
 */
proto.mcu.api.v1.OutputPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mcu.api.v1.OutputPacket;
  return proto.mcu.api.v1.OutputPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mcu.api.v1.OutputPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mcu.api.v1.OutputPacket}
 */
proto.mcu.api.v1.OutputPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = new mcu_models_pb.Sample;
      reader.readMessage(value,mcu_models_pb.Sample.deserializeBinaryFromReader);
      msg.setSample(value);
      break;
    case 3:
      var value = new proto.mcu.api.v1.LayoutPacket;
      reader.readMessage(value,proto.mcu.api.v1.LayoutPacket.deserializeBinaryFromReader);
      msg.setLayoutPacket(value);
      break;
    case 4:
      var value = new mcu_models_pb.KeyFrameRequest;
      reader.readMessage(value,mcu_models_pb.KeyFrameRequest.deserializeBinaryFromReader);
      msg.setKeyframeRequest(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasMediaPlayer(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mcu.api.v1.OutputPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mcu.api.v1.OutputPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mcu.api.v1.OutputPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.OutputPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSample();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mcu_models_pb.Sample.serializeBinaryToWriter
    );
  }
  f = message.getLayoutPacket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mcu.api.v1.LayoutPacket.serializeBinaryToWriter
    );
  }
  f = message.getKeyframeRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      mcu_models_pb.KeyFrameRequest.serializeBinaryToWriter
    );
  }
  f = message.getHasMediaPlayer();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getEnd();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.mcu.api.v1.OutputPacket.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
 */
proto.mcu.api.v1.OutputPacket.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Sample sample = 2;
 * @return {?proto.mcu.api.v1.Sample}
 */
proto.mcu.api.v1.OutputPacket.prototype.getSample = function() {
  return /** @type{?proto.mcu.api.v1.Sample} */ (
    jspb.Message.getWrapperField(this, mcu_models_pb.Sample, 2));
};


/**
 * @param {?proto.mcu.api.v1.Sample|undefined} value
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
*/
proto.mcu.api.v1.OutputPacket.prototype.setSample = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
 */
proto.mcu.api.v1.OutputPacket.prototype.clearSample = function() {
  return this.setSample(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.OutputPacket.prototype.hasSample = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LayoutPacket layout_packet = 3;
 * @return {?proto.mcu.api.v1.LayoutPacket}
 */
proto.mcu.api.v1.OutputPacket.prototype.getLayoutPacket = function() {
  return /** @type{?proto.mcu.api.v1.LayoutPacket} */ (
    jspb.Message.getWrapperField(this, proto.mcu.api.v1.LayoutPacket, 3));
};


/**
 * @param {?proto.mcu.api.v1.LayoutPacket|undefined} value
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
*/
proto.mcu.api.v1.OutputPacket.prototype.setLayoutPacket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
 */
proto.mcu.api.v1.OutputPacket.prototype.clearLayoutPacket = function() {
  return this.setLayoutPacket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.OutputPacket.prototype.hasLayoutPacket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional KeyFrameRequest keyframe_request = 4;
 * @return {?proto.mcu.api.v1.KeyFrameRequest}
 */
proto.mcu.api.v1.OutputPacket.prototype.getKeyframeRequest = function() {
  return /** @type{?proto.mcu.api.v1.KeyFrameRequest} */ (
    jspb.Message.getWrapperField(this, mcu_models_pb.KeyFrameRequest, 4));
};


/**
 * @param {?proto.mcu.api.v1.KeyFrameRequest|undefined} value
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
*/
proto.mcu.api.v1.OutputPacket.prototype.setKeyframeRequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
 */
proto.mcu.api.v1.OutputPacket.prototype.clearKeyframeRequest = function() {
  return this.setKeyframeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.OutputPacket.prototype.hasKeyframeRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool has_media_player = 5;
 * @return {boolean}
 */
proto.mcu.api.v1.OutputPacket.prototype.getHasMediaPlayer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
 */
proto.mcu.api.v1.OutputPacket.prototype.setHasMediaPlayer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool end = 6;
 * @return {boolean}
 */
proto.mcu.api.v1.OutputPacket.prototype.getEnd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mcu.api.v1.OutputPacket} returns this
 */
proto.mcu.api.v1.OutputPacket.prototype.setEnd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mcu.api.v1.InputPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.mcu.api.v1.InputPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mcu.api.v1.InputPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.InputPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sample: (f = msg.getSample()) && mcu_models_pb.Sample.toObject(includeInstance, f),
    managementcommand: (f = msg.getManagementcommand()) && mcu_models_pb.ManagementCommand.toObject(includeInstance, f),
    rtppacket: (f = msg.getRtppacket()) && mcu_models_pb.RTPPacket.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mcu.api.v1.InputPacket}
 */
proto.mcu.api.v1.InputPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mcu.api.v1.InputPacket;
  return proto.mcu.api.v1.InputPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mcu.api.v1.InputPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mcu.api.v1.InputPacket}
 */
proto.mcu.api.v1.InputPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 3:
      var value = new mcu_models_pb.Sample;
      reader.readMessage(value,mcu_models_pb.Sample.deserializeBinaryFromReader);
      msg.setSample(value);
      break;
    case 4:
      var value = new mcu_models_pb.ManagementCommand;
      reader.readMessage(value,mcu_models_pb.ManagementCommand.deserializeBinaryFromReader);
      msg.setManagementcommand(value);
      break;
    case 5:
      var value = new mcu_models_pb.RTPPacket;
      reader.readMessage(value,mcu_models_pb.RTPPacket.deserializeBinaryFromReader);
      msg.setRtppacket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mcu.api.v1.InputPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mcu.api.v1.InputPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mcu.api.v1.InputPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.InputPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoomId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSample();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      mcu_models_pb.Sample.serializeBinaryToWriter
    );
  }
  f = message.getManagementcommand();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      mcu_models_pb.ManagementCommand.serializeBinaryToWriter
    );
  }
  f = message.getRtppacket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      mcu_models_pb.RTPPacket.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.mcu.api.v1.InputPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mcu.api.v1.InputPacket} returns this
 */
proto.mcu.api.v1.InputPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string room_id = 2;
 * @return {string}
 */
proto.mcu.api.v1.InputPacket.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mcu.api.v1.InputPacket} returns this
 */
proto.mcu.api.v1.InputPacket.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Sample sample = 3;
 * @return {?proto.mcu.api.v1.Sample}
 */
proto.mcu.api.v1.InputPacket.prototype.getSample = function() {
  return /** @type{?proto.mcu.api.v1.Sample} */ (
    jspb.Message.getWrapperField(this, mcu_models_pb.Sample, 3));
};


/**
 * @param {?proto.mcu.api.v1.Sample|undefined} value
 * @return {!proto.mcu.api.v1.InputPacket} returns this
*/
proto.mcu.api.v1.InputPacket.prototype.setSample = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.InputPacket} returns this
 */
proto.mcu.api.v1.InputPacket.prototype.clearSample = function() {
  return this.setSample(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.InputPacket.prototype.hasSample = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ManagementCommand managementCommand = 4;
 * @return {?proto.mcu.api.v1.ManagementCommand}
 */
proto.mcu.api.v1.InputPacket.prototype.getManagementcommand = function() {
  return /** @type{?proto.mcu.api.v1.ManagementCommand} */ (
    jspb.Message.getWrapperField(this, mcu_models_pb.ManagementCommand, 4));
};


/**
 * @param {?proto.mcu.api.v1.ManagementCommand|undefined} value
 * @return {!proto.mcu.api.v1.InputPacket} returns this
*/
proto.mcu.api.v1.InputPacket.prototype.setManagementcommand = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.InputPacket} returns this
 */
proto.mcu.api.v1.InputPacket.prototype.clearManagementcommand = function() {
  return this.setManagementcommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.InputPacket.prototype.hasManagementcommand = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RTPPacket rtpPacket = 5;
 * @return {?proto.mcu.api.v1.RTPPacket}
 */
proto.mcu.api.v1.InputPacket.prototype.getRtppacket = function() {
  return /** @type{?proto.mcu.api.v1.RTPPacket} */ (
    jspb.Message.getWrapperField(this, mcu_models_pb.RTPPacket, 5));
};


/**
 * @param {?proto.mcu.api.v1.RTPPacket|undefined} value
 * @return {!proto.mcu.api.v1.InputPacket} returns this
*/
proto.mcu.api.v1.InputPacket.prototype.setRtppacket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mcu.api.v1.InputPacket} returns this
 */
proto.mcu.api.v1.InputPacket.prototype.clearRtppacket = function() {
  return this.setRtppacket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.InputPacket.prototype.hasRtppacket = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mcu.api.v1.OutputControlPacket.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.mcu.api.v1.OutputControlPacket.RequestCase = {
  REQUEST_NOT_SET: 0,
  KEY_FRAME: 1
};

/**
 * @return {proto.mcu.api.v1.OutputControlPacket.RequestCase}
 */
proto.mcu.api.v1.OutputControlPacket.prototype.getRequestCase = function() {
  return /** @type {proto.mcu.api.v1.OutputControlPacket.RequestCase} */(jspb.Message.computeOneofCase(this, proto.mcu.api.v1.OutputControlPacket.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mcu.api.v1.OutputControlPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.mcu.api.v1.OutputControlPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mcu.api.v1.OutputControlPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.OutputControlPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyFrame: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mcu.api.v1.OutputControlPacket}
 */
proto.mcu.api.v1.OutputControlPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mcu.api.v1.OutputControlPacket;
  return proto.mcu.api.v1.OutputControlPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mcu.api.v1.OutputControlPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mcu.api.v1.OutputControlPacket}
 */
proto.mcu.api.v1.OutputControlPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeyFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mcu.api.v1.OutputControlPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mcu.api.v1.OutputControlPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mcu.api.v1.OutputControlPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mcu.api.v1.OutputControlPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool key_frame = 1;
 * @return {boolean}
 */
proto.mcu.api.v1.OutputControlPacket.prototype.getKeyFrame = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mcu.api.v1.OutputControlPacket} returns this
 */
proto.mcu.api.v1.OutputControlPacket.prototype.setKeyFrame = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.mcu.api.v1.OutputControlPacket.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mcu.api.v1.OutputControlPacket} returns this
 */
proto.mcu.api.v1.OutputControlPacket.prototype.clearKeyFrame = function() {
  return jspb.Message.setOneofField(this, 1, proto.mcu.api.v1.OutputControlPacket.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mcu.api.v1.OutputControlPacket.prototype.hasKeyFrame = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.mcu.api.v1);