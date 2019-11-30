class OrderRequestMailer < ApplicationMailer
  default from: 'noreply@sms-reklama.com'
  layout 'mailer'

  def order_request(order)
    @order_request = order

    mail(to: 'amit27@yandex.com', subject: 'Новая заявка!')
  end
end
