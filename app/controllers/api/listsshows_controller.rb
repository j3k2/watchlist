module Api
  class ListsshowsController < ApplicationController
  
    def show
      @listsshows = ListsShows.find_by(list_id: params[:id], show_id: params[:show_id])
      render json: @listsshows
    end
    
    def destroy
      @listsshows = ListsShows.find_by(list_id: params[:id], show_id: params[:show_id])
      if @listsshows.destroy
        render json: @listsshows
      else
        render json: @listsshows.errors
      end
    end
    
    def create
      @listsshows = ListsShows.new(listsshows_params)
      if @listsshows.save
        render json: @listsshows
      else
        render json: @listsshows.errors
      end
    end
  
    private
    def listsshows_params
      params.require(:listsshow).permit(:list_id, :show_id)
    end
  
  end
  
end
