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
import { CreateEmailLogArgs } from "./CreateEmailLogArgs";
import { UpdateEmailLogArgs } from "./UpdateEmailLogArgs";
import { DeleteEmailLogArgs } from "./DeleteEmailLogArgs";
import { EmailLogCountArgs } from "./EmailLogCountArgs";
import { EmailLogFindManyArgs } from "./EmailLogFindManyArgs";
import { EmailLogFindUniqueArgs } from "./EmailLogFindUniqueArgs";
import { EmailLog } from "./EmailLog";
import { EmailLogService } from "../emailLog.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmailLog)
export class EmailLogResolverBase {
  constructor(
    protected readonly service: EmailLogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EmailLog",
    action: "read",
    possession: "any",
  })
  async _emailLogsMeta(
    @graphql.Args() args: EmailLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EmailLog])
  @nestAccessControl.UseRoles({
    resource: "EmailLog",
    action: "read",
    possession: "any",
  })
  async emailLogs(
    @graphql.Args() args: EmailLogFindManyArgs
  ): Promise<EmailLog[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EmailLog, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EmailLog",
    action: "read",
    possession: "own",
  })
  async emailLog(
    @graphql.Args() args: EmailLogFindUniqueArgs
  ): Promise<EmailLog | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EmailLog)
  @nestAccessControl.UseRoles({
    resource: "EmailLog",
    action: "create",
    possession: "any",
  })
  async createEmailLog(
    @graphql.Args() args: CreateEmailLogArgs
  ): Promise<EmailLog> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EmailLog)
  @nestAccessControl.UseRoles({
    resource: "EmailLog",
    action: "update",
    possession: "any",
  })
  async updateEmailLog(
    @graphql.Args() args: UpdateEmailLogArgs
  ): Promise<EmailLog | null> {
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

  @graphql.Mutation(() => EmailLog)
  @nestAccessControl.UseRoles({
    resource: "EmailLog",
    action: "delete",
    possession: "any",
  })
  async deleteEmailLog(
    @graphql.Args() args: DeleteEmailLogArgs
  ): Promise<EmailLog | null> {
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
