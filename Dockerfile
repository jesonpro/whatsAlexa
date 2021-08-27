FROM fusuf/whatsasena:latest

RUN git clone https://github.com/jesonpro/whatsAlexa /root/WhatsAlexa
WORKDIR /root/WhatsAlexa/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
