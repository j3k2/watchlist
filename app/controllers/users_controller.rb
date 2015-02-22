class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      List.create({category: 'to watch', user_id: @user.id});
      List.create({category: 'watching', user_id: @user.id});
      List.create({category: 'watched', user_id: @user.id});

      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_session_url
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
