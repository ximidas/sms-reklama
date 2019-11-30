class Admin::AdminsController < ApplicationController

  layout 'admin/application'
  helper_method :admin?

  def index
    @users = User.all

    @orders = OrderRequest.all.order('created_at DESC')

    if admin?
      render 'admin/index'
    else
      redirect_to '/enter'
    end

  end

  def close_order_request
    @order = OrderRequest.find(params[:id])
    @order.update(status: 1)
    @order.save

    redirect_to '/admin'
  end


  private

  def admin?
    current_user && current_user.role == 1
  end

end