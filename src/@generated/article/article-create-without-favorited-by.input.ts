import { InputType, Field, Int } from '@nestjs/graphql';
import { TagCreateManyWithoutArticlesInput } from '../tag/tag-create-many-without-articles.input';
import { UserCreateOneWithoutArticlesInput } from '../user/user-create-one-without-articles.input';
import { CommentCreateManyWithoutArticleInput } from '../comment/comment-create-many-without-article.input';

@InputType({})
export class ArticleCreateWithoutFavoritedByInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    title?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    description?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: string | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | null;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | null;

    @Field(() => TagCreateManyWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    tags?: TagCreateManyWithoutArticlesInput | null;

    @Field(() => UserCreateOneWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutArticlesInput | null;

    @Field(() => CommentCreateManyWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutArticleInput | null;
}