/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateRandomplayerArgs } from "./CreateRandomplayerArgs";
import { UpdateRandomplayerArgs } from "./UpdateRandomplayerArgs";
import { DeleteRandomplayerArgs } from "./DeleteRandomplayerArgs";
import { RandomplayerCountArgs } from "./RandomplayerCountArgs";
import { RandomplayerFindManyArgs } from "./RandomplayerFindManyArgs";
import { RandomplayerFindUniqueArgs } from "./RandomplayerFindUniqueArgs";
import { Randomplayer } from "./Randomplayer";
import { RandomplayerService } from "../randomplayer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Randomplayer)
export class RandomplayerResolverBase {
  constructor(
    protected readonly service: RandomplayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Randomplayer",
    action: "read",
    possession: "any",
  })
  async _randomplayersMeta(
    @graphql.Args() args: RandomplayerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Randomplayer])
  @nestAccessControl.UseRoles({
    resource: "Randomplayer",
    action: "read",
    possession: "any",
  })
  async randomplayers(
    @graphql.Args() args: RandomplayerFindManyArgs
  ): Promise<Randomplayer[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Randomplayer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Randomplayer",
    action: "read",
    possession: "own",
  })
  async randomplayer(
    @graphql.Args() args: RandomplayerFindUniqueArgs
  ): Promise<Randomplayer | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Randomplayer)
  @nestAccessControl.UseRoles({
    resource: "Randomplayer",
    action: "create",
    possession: "any",
  })
  async createRandomplayer(
    @graphql.Args() args: CreateRandomplayerArgs
  ): Promise<Randomplayer> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Randomplayer)
  @nestAccessControl.UseRoles({
    resource: "Randomplayer",
    action: "update",
    possession: "any",
  })
  async updateRandomplayer(
    @graphql.Args() args: UpdateRandomplayerArgs
  ): Promise<Randomplayer | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Randomplayer)
  @nestAccessControl.UseRoles({
    resource: "Randomplayer",
    action: "delete",
    possession: "any",
  })
  async deleteRandomplayer(
    @graphql.Args() args: DeleteRandomplayerArgs
  ): Promise<Randomplayer | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}