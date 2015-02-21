class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :current_user
  
  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end
  
  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  
  def require_current_user
    redirect_to new_user_url unless current_user
  end
end
