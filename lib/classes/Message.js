import Base from './Base'
import Keyboard from './Keyboard';

/**
 * Message class
 * @class
 */
export default class Message extends Base {

  /**
   * @constructor
   * @param {Object} [options = {}]
   */
  constructor(options = {}) {
    super();
    this.setProperties(options);
  }

  /**
   * Get or set chat_id of message recipient
   * @param {number} chat
   * @return {Message|number}
   */
  to(chat) {
    if (chat) {
      this.setProperties({chat_id: chat});
      return this;
    }
    return this.getProperties('chat_id');
  }

  /**
   * Get or set text of message
   * @param {string} text
   * @return {Message|string}
   */
  text(text) {
    if (text) {
      this.setProperties({text: text});
      return this;
    }
    return this.getProperties('text');
  }

  /**
   * Get or set reply_to_message_id
   * @param {number} chat
   * @return {Message|number}
   */
  reply(chat) {
    if (chat) {
      this.setProperties({reply_to_message_id: chat});
      return this;
    }
    return this.getProperties('reply_to_message_id');
  }

  /**
   * Get or set reply_markup of message
   * @param {Array} markup
   * @return {Message|Array}
   */
  keyboard(markup) {
    if (markup) {
      this.setProperties({reply_markup: JSON.stringify(markup)});
      return this;
    }
    return JSON.parse(this.getProperties('reply_markup'));
  }

  send() {

  }

  /*keyboard(options) {
    let params;

    if (this._keyboard && !options) {
      return this._keyboard;
    }

    if (this._keyboard) {
      params = Object.assign(this._keyboard.replyMarkup, options);
    } else {
      params = options;
    }

    this._keyboard = new Keyboard(this, params);
    return this._keyboard;
  }

  send(bot) {
    let messageId;

    return new Promise(resolve => {
      bot.api.sendMessage(this.params).then(response => {
        messageId = response.result.message_id;
        this.emit('message:sent', response);
      });

      if (this.keyboard().replyMarkup.one_time_keyboard) {
        this.keyboard().replyMarkup = '';
      }

      const chat = this.params.chat_id;
      bot.on('update', function listener(result) {
        const update = result.find(({message}) => {
          // if in a group, there will be a reply to this message
          if (chat < 0) {
            return message.chat.id === chat &&
              message.reply_to_message.message_id === messageId;
          } else {
            return message.chat.id === chat;
          }
        });

        if (update) {
          resolve(update);
          this.emit('message:answer', update);

          bot.removeListener('update', listener);
        }
      });
    });
  }*/
}