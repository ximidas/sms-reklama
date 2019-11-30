module Api
class VueController < ApplicationController

  def statistics

    @count = Number.count

    @regions = Number.distinct.pluck(:region).sort

    @statistics = []
    @regions.each do |region|
      @statistics << [region: region, count: Number.where(region: region).count]
    end

    render json: { numbers: @count, statistics: @statistics, regions: @regions}

  end

  def save_order_request

    @order_request = OrderRequest.new
    @order_request.update(name: params[:name], connection: params[:connection], cities: params[:cities],
                          sms_quantity: params[:sms_quantity], price: params[:price],
                          business_description: params[:business_description],
                          target_audience_description: params[:target_audience], type_order: params[:type], status: 0)
    @order_request.save

    OrderRequestMailer.order_request(@order_request).deliver_now

    render json: {status: 200}

  end

end
end