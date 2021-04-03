class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [ :create, :update, :destroy]
  before_action :set_article
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :check_if_author, only: [:update, :destroy]

  # GET /comments
  def index
    @comments = @article.comments

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = @article.comments.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render json: @comment, status: :created, location: url_for([@article, @comment])
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_article
      @article = Article.find(params[:article_id])
    end
    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:user_id, :article, :content)
    end

    def check_if_author
      unless @comment.user.id == current_user.id
        render json: {success: false, error: "You can't modify this comment"}, status: 401
      end
    end
end
