Rails.application.routes.draw do

  namespace :api do
    get 'statistics', to: 'vue#statistics'
    post 'save_order_request', to: 'vue#save_order_request'
  end

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do

    namespace :admin do

      root 'admins#index'
      get 'close_order_request/:id', to: 'admins#close_order_request', as: 'close_order_request'

    end


    root to: 'landing#index'

    # Users
    resources :users
    resources :sessions, only: [:create, :destroy]
    get 'enter', to: 'users#enter', as: 'enter'
    get 'logout', to: 'sessions#destroy', as: 'logout'

    get 'sessions/new'
    get 'sessions/create'
    get 'sessions/destroy'

  end

end
